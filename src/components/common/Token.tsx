import { Color } from '@/types';
import { Gem } from './Gem';
import { styled } from '@/theme';
import { withStopPropagation } from '@/utils';

export interface TokenProps {
  color: Color
  disabled?: boolean
  onClick?: () => void
}

export const Token = ({ color, onClick, disabled }: TokenProps) => {
  return (
    <ButtonWrapper clickable={!!onClick} onClick={withStopPropagation(onClick)} disabled={disabled} data-testid={`token-${color}`}>
      <GemStyled size="big" color={color} disabled={disabled} />
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled('button', {
  border: 'none',
  background: 'none',

  '&[disabled]': {
    cursor: 'not-allowed'
  },

  variants: {
    clickable: {
      true: {
        cursor: 'pointer'
      }
    }
  }
})

const GemStyled = styled(Gem, {
  border: '4px solid white',
  outline: '2px solid gray'
})
