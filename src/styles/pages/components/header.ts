import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '&.success': {
    justifyContent: 'center',
  },
})

export const CartButton = styled('button', {
  padding: '0.75rem',
  borderRadius: 6,
  backgroundColor: '$gray800',
  border: 0,
  position: 'relative',
  cursor: 'pointer',

  '&.full svg path': {
    fill: '$gray100',
  },

  'svg path': {
    fill: '$gray300',
  },
  '&:hover svg path': {
    fill: '$gray100',
    transition: 'fill 0.2s ease-in-out',
  },

  span: {
    backgroundColor: '$green500',
    color: '$white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    padding: '0',
    width: '1.5rem',
    height: '1.5rem',
    position: 'absolute',
    top: 0,
    right: 0,
    border: '3px solid $gray900',
    transform: 'translateX(30%) translateY(-30%)',
  },
})
