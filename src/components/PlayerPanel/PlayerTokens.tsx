import { useAppSelector } from '@/store'
import { Color } from '@/types'
import { Row, TokenCounter } from '@/components/common'

export const PlayerTokens = () => {
  const { players, currentPlayerIndex } = useAppSelector(state => state)
  const { tokens } = players[currentPlayerIndex]
  const tokenEntries = Object.entries(tokens) as [Color, number][]

  return (
    <Row gap="big">
      {tokenEntries.map(([color, count]) => (
        <TokenCounter key={`player-token-${color}`} color={color} count={count} />
      ))}
    </Row>
  )
}
