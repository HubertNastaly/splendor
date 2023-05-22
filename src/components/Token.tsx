import { styled } from "../theme";
import { Color } from "../types";
import { Gem } from "./Gem";

interface Props {
  color: Color
}

export const Token = ({ color }: Props) => (
  <GemStyled size="big" color={color} />
)

const GemStyled = styled(Gem, {
  border: '4px solid white',
  outline: '2px solid gray'
})
