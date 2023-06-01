import { styled } from '@/theme';
import { withStopPropagation } from '@/utils';
import { PropsWithChildren } from 'react';

interface Props {
  onClick?: () => void
  disabled?: boolean
  view?: 'primary' | 'secondary'
}

export const Button = ({ onClick, disabled, view, children }: PropsWithChildren<Props>) => (
  <ButtonComponent view={view} disabled={disabled} onClick={withStopPropagation(onClick)}>
    {children}
  </ButtonComponent>
)

const ButtonComponent = styled('button', {
  height: 36,
  fontSize: '$normal',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',

  '&[disabled]': {
    background: '$disabled',
    cursor: 'not-allowed'
  },

  variants: {
    view: {
      primary: {
        color: 'white',
        background: 'black',
      },
      secondary: {
        color: 'black',
        background: 'none',
        border: '2px solid black'
      }
    }
  },

  defaultVariants: {
    view: 'primary'
  }
})
