import { useCurrentPlayer } from '@/hooks'
import { Panel, Row } from '@/components/common'
import { useAppDispatch } from '@/store/hooks'
import { BasicColor, Color } from '@/types'
import { canPayToken, isOverTokensLimit } from '@/helpers'
import { styled } from '@/theme'
import { payTokenAction, returnTokenAction } from '@/store/actions'
import { ColorGroup } from './ColorGroup'
import { GoldGroup } from './GoldGroup'

export const PlayerPanel = () => {
  const dispatch = useAppDispatch()
  const currentPlayer = useCurrentPlayer()
  const { tokens: { gold, ...basicTokens }, cards, reservedCards } = currentPlayer
  const basicTokensEntries = Object.entries(basicTokens) as [BasicColor, number][]

  const returnToken = (tokenColor: Color) => dispatch(returnTokenAction(tokenColor))
  const payToken = (tokenColor: Color) => dispatch(payTokenAction(tokenColor))

  const getOnTokenClick = (color: Color) =>
    canPayToken(currentPlayer) ? () => payToken(color) :
    isOverTokensLimit(currentPlayer) ? () => returnToken(color) :
    undefined

  return (
    <Container data-testid="player-panel">
      <RowStyled gap="medium" align="start">
        {basicTokensEntries.map(([color, count]) => (
          <ColorGroup
            key={`${color}-group`}
            color={color}
            cards={cards[color]}
            tokensCount={count}
            onTokenClick={getOnTokenClick(color)}
          />
        ))}
        <Separator />
        <GoldGroup
          reservedCards={reservedCards}
          goldCount={gold}
          onGoldClick={getOnTokenClick('gold')}
        />
      </RowStyled>
    </Container>
  )
}

const Container = styled(Panel, {
  height: 1, // workaround
  minHeight: 348,
  '@lowResolution': {
    minHeight: 192
  }
})

const RowStyled = styled(Row, {
  height: '100%'
})

const Separator = styled('div', {
  height: '100%',
  width: 2,
  background: 'white'
})
