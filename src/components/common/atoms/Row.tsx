import { styled } from '@/theme';

export const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',

  variants: {
    gap: {
      microscopic: {
        columnGap: '$microscopic'
      },
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
    },
    justify: {
      center: {
        justifyContent: 'center'
      },
      start: {
        justifyContent: 'flex-start'
      },
      spaceBetween: {
        justifyContent: 'space-between'
      },
      stretch: {
        justifyContent: 'stretch'
      }
    },
    wide: {
      true: {
        flex: 1
      }
    }
  },

  defaultVariants: {
    gap: 'small',
    align: 'center',
    justify: 'start'
  }
})
