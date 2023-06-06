import { Token, TokenProps } from './Token'
import { styled } from '@/theme'
import { Row } from './atoms'

interface Props extends TokenProps {
  count: number
}

export const TokenCounter = ({ count, ...tokenProps }: Props) => {
  return (
    <Row gap={{ '@initial': 'small', '@lowResolution': 'tiny' }}>
      <Token {...tokenProps} />
      <Counter data-testid={`token-counter-${tokenProps.color}`}>{count}</Counter>
    </Row>
  )
}

const Counter = styled('span', {
  fontSize: '$big',
  '@lowResolution': {
    fontSize: '$normal'
  }
})
