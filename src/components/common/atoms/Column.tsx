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
        '@lowResolution': {
          rowGap: '$tiny'
        }
      },
      medium: {
        rowGap: '$medium',
        '@lowResolution': {
          rowGap: '$small'
        }
      },
      big: {
        rowGap: '$big',
        '@lowResolution': {
          rowGap: '$medium'
        }
      },
      enormous: {
        rowGap: '$enormous'
      }
    }
  },

  defaultVariants: {
    gap: 'small'
  }
})
