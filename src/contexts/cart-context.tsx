import { produce } from 'immer'
import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

interface CartItem {
  id: string
  princingId: string
  quantity: number
  name: string
  price: string
  imageUrl: string
}

interface CartContextProps {
  items: CartItem[]
  isCartOpen: boolean
  addItemToCart: (item: CartItem) => void
  removeItemFromCart: (itemId: string) => void
  toggleCartOpen: () => void
}

export const CartContext = createContext({} as CartContextProps)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  const addItemToCart = (cartItem: CartItem) => {
    setItems(
      produce(items, (draft) => {
        const productOnCartIndex = draft.findIndex(
          (item) => item.id === cartItem.id,
        )
        if (productOnCartIndex === -1) {
          draft.push(cartItem)
        }
      }),
    )
  }

  const removeItemFromCart = (itemId: string) => {
    setItems(items.filter((item) => item.id !== itemId))
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        addItemToCart,
        removeItemFromCart,
        toggleCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
