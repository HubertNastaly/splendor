import { BasicColor, Color } from '@/types'
import { Row, TokenCounter } from '@/components/common'
import { useCurrentPlayer } from '@/hooks'
import { isOverTokensLimit } from '@/helpers'
import { useAppDispatch } from '@/store/hooks'

export const PlayerTokens = () => {
  const dispatch = useAppDispatch()
  const currentPlayer = useCurrentPlayer()
  const { tokens } = currentPlayer
  const tokenEntries = Object.entries(tokens) as [BasicColor, number][]

  const returnToken = (tokenColor: Color) => dispatch({ type: 'RETURN_TOKEN', payload: { tokenColor }})

  return (
    <Row gap="big">
      {tokenEntries.map(([color, count]) => (
        <TokenCounter
          key={`player-token-${color}`}
          color={color}
          count={count}
          {...isOverTokensLimit(currentPlayer) && {
            onClick: () => returnToken(color)
          }}
        />
      ))}
    </Row>
  )
}
