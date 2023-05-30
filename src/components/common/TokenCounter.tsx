import { Row } from './atoms/Row'
import { Token, TokenProps } from './Token'
import { styled } from '@/theme'

interface Props extends TokenProps {
  count: number
}

export const TokenCounter = ({ count, ...tokenProps }: Props) => {
  return (
    <Row>
      <Token {...tokenProps} />
      <Counter>{count}</Counter>
    </Row>
  )
}

const Counter = styled('span', {
  fontSize: '$big'
})
