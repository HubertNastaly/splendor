import { useCurrentPlayer } from '@/hooks'
import { ColorGroup } from './ColorGroup'
import { Panel, Row } from '@/components/common'
import { useAppDispatch } from '@/store/hooks'
import { Color } from '@/types'
import { canPayToken, isOverTokensLimit } from '@/helpers'
import { styled } from '@/theme'
import { payTokenAction, returnTokenAction } from '@/store/actions'

export const PlayerPanel = () => {
  const dispatch = useAppDispatch()
  const currentPlayer = useCurrentPlayer()
  const { tokens, cards } = currentPlayer
  const tokenEntries = Object.entries(tokens) as [Color, number][]

  const returnToken = (tokenColor: Color) => dispatch(returnTokenAction(tokenColor))
  const payToken = (tokenColor: Color) => dispatch(payTokenAction(tokenColor))

  const getOnTokenClick = (color: Color) =>
    canPayToken(currentPlayer) ? () => payToken(color) :
    isOverTokensLimit(currentPlayer) ? () => returnToken(color) :
    undefined

  return (
    <Container data-testid="player-panel">
      <Row gap="big" align="start">
        {tokenEntries.map(([color, count]) => (
          <ColorGroup
            key={`${color}-group`}
            color={color}
            cards={color !== 'gold' ? cards[color] : []}
            tokensCount={count}
            onTokenClick={getOnTokenClick(color)}
          />
        ))}
      </Row>
    </Container>
  )
}

const Container = styled(Panel, {
  minHeight: 348
})
