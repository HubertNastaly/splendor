import { styled } from '@/theme';

export const Separator = styled('div', {
  background: 'white',

  variants: {
    orientation: {
      vertical: {
        height: '100%',
        width: 2,
      },
      horizontal: {
        height: 2,
        width: '100%'
      }
    }
  },

  defaultVariants: {
    orientation: 'horizontal'
  }
})
