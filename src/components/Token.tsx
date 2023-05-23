import { styled } from "../theme";
import { Color } from "../types";
import { Gem } from "./Gem";

interface Props {
  color: Color
  onClick?: () => void
}

export const Token = ({ color, onClick }: Props) => (
  <ButtonWrapper onClick={onClick}>
    <GemStyled size="big" color={color} />
  </ButtonWrapper>
)

const ButtonWrapper = styled('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer'
})

const GemStyled = styled(Gem, {
  border: '4px solid white',
  outline: '2px solid gray'
})
