import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ImageList,
  SuccessContainer,
} from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

type SuccessProps = {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageList>
          {products.map((product) => {
            return (
              <ImageContainer key={product.imageUrl}>
                <Image src={product.imageUrl} width={120} height={110} alt="" />
              </ImageContainer>
            )
          })}
        </ImageList>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{' '}
          camiseta(s) já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const customerName = session?.customer_details?.name

  if (session?.line_items?.data) {
    const products = session?.line_items?.data.map((item) => {
      if (
        typeof item?.price?.product === 'object' &&
        item.price.product.deleted !== true
      ) {
        return {
          name: item?.price?.product?.name,
          imageUrl: item?.price?.product?.images[0],
        }
      }
      return undefined
    })
    return {
      props: {
        customerName,
        products,
      },
    }
  }
  return {
    props: {},
  }
}
