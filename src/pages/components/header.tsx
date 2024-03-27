import CartIcon from '@/assets/cart-icon.svg'
import LogoImg from '@/assets/logo.svg'
import { CartContext } from '@/contexts/cart-context'
import { CartButton, HeaderContainer } from '@/styles/pages/components/header'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContextSelector } from 'use-context-selector'
import { Cart } from './cart'

export const Header = () => {
  const pathname = usePathname()

  const items = useContextSelector(CartContext, (context) => {
    return context.items
  })

  const toggleCartOpen = useContextSelector(CartContext, (context) => {
    return context.toggleCartOpen
  })

  const isCartOpen = useContextSelector(CartContext, (context) => {
    return context.isCartOpen
  })

  return (
    <>
      {pathname !== '/success' && (
        <Cart open={isCartOpen} onCartOpen={toggleCartOpen} />
      )}
      <HeaderContainer className={`${pathname === '/success' && 'success'}`}>
        <Link href="/">
          <LogoImg width={136} height={52} />
        </Link>
        {pathname !== '/success' && (
          <CartButton className="full" onClick={toggleCartOpen}>
            <CartIcon size={24} />
            <span>{items?.length}</span>
          </CartButton>
        )}
      </HeaderContainer>
    </>
  )
}
