import { styled } from '@/theme';

export const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',

  variants: {
    gap: {
      tiny: {
        columnGap: '$tiny'
      },
      small: {
        columnGap: '$small',
      },
      medium: {
        columnGap: '$medium',
      },
      big: {
        columnGap: '$big',
      },
      large: {
        columnGap: '$large',
      },
      enormous: {
        columnGap: '$enormous',
      }
    },
    align: {
      center: {
        alignItems: 'center'
      },
      start: {
        alignItems: 'flex-start'
      },
      stretch: {
        alignItems: 'stretch'
      }
    }
  },

  defaultVariants: {
    gap: 'small',
    align: 'center'
  }
})
