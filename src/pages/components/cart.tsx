import CloseIcon from '@/assets/close-icon.svg'
import { CartContext } from '@/contexts/cart-context'

import {
  CartContainer,
  CartProduct,
  CartProductInfo,
  CartProducts,
  CloseButton,
  ImageContainer,
} from '@/styles/pages/components/cart'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'

interface CartProps {
  open: boolean
  onCartOpen: () => void
}

export const Cart = ({ open, onCartOpen }: CartProps) => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const items = useContextSelector(CartContext, (context) => {
    return context.items
  })
  const removeItemFromCart = useContextSelector(CartContext, (context) => {
    return context.removeItemFromCart
  })

  const handleRemoveItemFromCart = (itemId: string) => {
    removeItemFromCart(itemId)
  }

  const handleCheckout = async () => {
    try {
      setIsCreatingCheckoutSession(true)

      const priceIds = items.map((item) => {
        return item.princingId
      })
      const response = await axios.post('/api/checkout-session', {
        items: priceIds,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <CartContainer className={`${open ? 'open' : 'close'}`}>
      <h2>Sacola de compras</h2>
      <CloseButton onClick={onCartOpen}>
        <CloseIcon size={24} />
      </CloseButton>
      <CartProducts>
        {items.length > 0 ? (
          items.map((item) => {
            return (
              <CartProduct key={item.id}>
                <ImageContainer>
                  <Image src={item.imageUrl} width={101} height={93} alt="" />
                </ImageContainer>
                <CartProductInfo>
                  <h3>{item.name}</h3>
                  <span>{item.price}</span>
                  <button onClick={() => handleRemoveItemFromCart(item.id)}>
                    Remover
                  </button>
                </CartProductInfo>
              </CartProduct>
            )
          })
        ) : (
          <h3>Você ainda não comprou nada</h3>
        )}
      </CartProducts>
      <button onClick={handleCheckout} disabled={isCreatingCheckoutSession}>
        Finalizar compra
      </button>
    </CartContainer>
  )
}
