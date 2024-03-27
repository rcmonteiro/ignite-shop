import { CartContextProvider } from '@/contexts/cart-context'
import { globalStyles } from '@/styles/globals'
import { Container } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import { Header } from './components/header'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
