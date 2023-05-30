import { styled } from '@/theme';

export const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  variants: {
    gap: {
      tiny: {
        rowGap: '$tiny'
      },
      small: {
        rowGap: '$small'
      },
      medium: {
        rowGap: '$medium'
      },
      big: {
        rowGap: '$big'
      },
      large: {
        rowGap: '$large'
      }
    }
  },

  defaultVariants: {
    gap: 'small'
  }
})
