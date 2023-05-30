import { styled } from '@/theme';
import { withStopPropagation } from '@/utils';
import { PropsWithChildren } from 'react';

interface Props {
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({ onClick, disabled, children }: PropsWithChildren<Props>) => (
  <ButtonComponent disabled={disabled} onClick={withStopPropagation(onClick)}>
    {children}
  </ButtonComponent>
)

const ButtonComponent = styled('button', {
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
