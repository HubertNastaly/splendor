import { BasicColor } from '@/types'
import { Row, TokenCounter } from '@/components/common'
import { useCurrentPlayer } from '@/hooks'

export const PlayerTokens = () => {
  const { tokens } = useCurrentPlayer()
  const tokenEntries = Object.entries(tokens) as [BasicColor, number][]

  return (
    <Row gap="big">
      {tokenEntries.map(([color, count]) => (
        <TokenCounter key={`player-token-${color}`} color={color} count={count} />
      ))}
    </Row>
  )
}
