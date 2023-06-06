import { styled } from '@/theme';
import { withStopPropagation } from '@/utils';
import { PropsWithChildren } from 'react';

interface Props {
  onClick?: () => void
  disabled?: boolean
  view?: 'primary' | 'secondary'
  className?: string
}

export const Button = ({ onClick, disabled, view, children, className }: PropsWithChildren<Props>) => (
  <ButtonComponent className={className} view={view} disabled={disabled} onClick={withStopPropagation(onClick)}>
    {children}
  </ButtonComponent>
)

const ButtonComponent = styled('button', {
  height: 36,
  paddingLeft: '$small',
  paddingRight: '$small',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',

  fontSize: '$normal',
  '@lowResolution': {
    fontSize: '$small'
  },

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
