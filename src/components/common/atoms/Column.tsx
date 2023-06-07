import { styled } from '@/theme';

export const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  variants: {
    gap: {
      none: {
        rowGap: '0px'
      },
      tiny: {
        rowGap: '$tiny'
      },
      small: {
        rowGap: '$small',
      },
      medium: {
        rowGap: '$medium',
      },
      big: {
        rowGap: '$big',
      },
      enormous: {
        rowGap: '$enormous'
      }
    },
    align: {
      center: {
        alignItems: 'center'
      },
      start: {
        alignItems: 'flex-start'
      },
      end: {
        alignItems: 'flex-end'
      },
      stretch: {
        alignItems: 'stretch'
      }
    },
    justify: {
      start: {
        justifyContent: 'flex-start'
      },
      end: {
        justifyContent: 'flex-end'
      },
      center: {
        justifyContent: 'center'
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
    justify: 'start'
  }
})
