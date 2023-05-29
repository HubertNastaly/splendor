import { GemColor } from '@/types';
import { Gem } from './Gem';
import { styled } from '@/theme';

interface Props {
  color: GemColor
  disabled?: boolean
  onClick?: () => void
}

export const Token = ({ color, onClick, disabled }: Props) => (
  <ButtonWrapper clickable={!!onClick} onClick={onClick} disabled={disabled}>
    <GemStyled size="big" color={color} disabled={disabled} />
  </ButtonWrapper>
)

const ButtonWrapper = styled('button', {
  border: 'none',
  background: 'none',

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed'
      }
    },
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
