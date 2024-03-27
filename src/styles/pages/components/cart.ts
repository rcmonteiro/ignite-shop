import { styled } from '../..'

export const CartContainer = styled('div', {
  position: 'fixed',
  zIndex: 10,
  right: 0,
  top: 0,
  display: 'flex',
  padding: '3rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  width: '30rem',
  backgroundColor: '$gray800',
  boxShadow: '#000000 -4px 0px 30px',
  transform: 'translateX(100%)',
  transition: '0.3s ease-in-out',

  '&.open': {
    transform: 'translateX(0)',
  },

  h2: {
    marginBottom: '2rem',
    fontSize: '$lg',
    fontWeight: 700,
    color: '$gray100',
  },

  '& > button': {
    fontSize: '$md',
    backgroundColor: '$green300',
    color: '$white',
    border: 0,
    borderRadius: 6,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
})

export const CloseButton = styled('div', {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  cursor: 'pointer',

  'svg path': {
    fill: '$gray300',
  },

  '&:hover svg path': {
    fill: '$gray100',
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '6.3125rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
})

export const CartProducts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: '1.5rem',
})

export const CartProduct = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  fontSize: '$md',
})

export const CartProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'flex-start',

  span: {
    color: '$gray300',
  },
  strong: {
    color: '$gray100',
  },

  button: {
    color: '$green500',
    background: 'transparent',
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '$md',
    border: 0,
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '0.5rem',
    },
  },
})
