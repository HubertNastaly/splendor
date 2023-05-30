import { styled } from '@/theme';

export const Button = styled('button', {
  height: 36,
  fontSize: '$normal',
  color: 'white',
  background: 'black',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        background: '$disabled',
        cursor: 'not-allowed'
      }
    }
  }
})
