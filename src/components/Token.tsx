import { styled } from "../theme";
import { Color } from "../types";
import { Gem } from "./Gem";

interface Props {
  color: Color
  disabled?: boolean
  onClick?: () => void
}

export const Token = ({ color, onClick, disabled }: Props) => (
  <ButtonWrapper onClick={onClick} disabled={disabled}>
    <GemStyled size="big" color={color} disabled={disabled} />
  </ButtonWrapper>
)

const ButtonWrapper = styled('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed'
      }
    }
  }
})

const GemStyled = styled(Gem, {
  border: '4px solid white',
  outline: '2px solid gray'
})
