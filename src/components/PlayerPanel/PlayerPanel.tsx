import { useMemo } from 'react'
import { GiQueenCrown } from 'react-icons/gi'
import { FaRegGem } from 'react-icons/fa'
import { PointsIndicator, Panel, Row, Separator } from '@/components/common'
import { useAppDispatch } from '@/store/hooks'
import { BasicColor, Color } from '@/types'
import { canPayToken, isOverTokensLimit } from '@/helpers'
import { styled } from '@/theme'
import { payTokenAction, returnTokenAction } from '@/store/actions'
import { sumAristocratsPoints, sumCardsPoints } from '@/helpers/score'
import { testIds } from '@/constants'
import { useDisplayedPlayer } from '@/hooks'
import { ColorGroup } from './ColorGroup'
import { GoldGroup } from './GoldGroup'

export const PlayerPanel = () => {
  const dispatch = useAppDispatch()
  const displayedPlayer = useDisplayedPlayer()

  const { tokens: { gold, ...basicTokens }, cards, reservedCards, aristocrats } = displayedPlayer
  const basicTokensEntries = Object.entries(basicTokens) as [BasicColor, number][]

  const returnToken = (tokenColor: Color) => dispatch(returnTokenAction(tokenColor))
  const payToken = (tokenColor: Color) => dispatch(payTokenAction(tokenColor))

  const getOnTokenClick = (color: Color) =>
    canPayToken(displayedPlayer) ? () => payToken(color) :
    isOverTokensLimit(displayedPlayer) ? () => returnToken(color) :
    undefined

  const cardsPoints = useMemo(() => sumCardsPoints(cards), [cards])
  const aristocratsPoints = useMemo(() => sumAristocratsPoints(aristocrats), [aristocrats])

  return (
    <Container data-testid={testIds.playerPanel}>
      <TopSection gap="medium" align="start">
        {basicTokensEntries.map(([color, count]) => (
          <ColorGroup
            key={`${color}-group`}
            color={color}
            cards={cards[color]}
            tokensCount={count}
            onTokenClick={getOnTokenClick(color)}
          />
        ))}
      </TopSection>
      <Separator orientation="horizontal" />
      <BottomSection justify="spaceBetween" align="end">
        <GoldGroup
          reservedCards={reservedCards}
          goldCount={gold}
          onGoldClick={getOnTokenClick('gold')}
        />
        <PointsIndicators gap="tiny" align="end">
          <PointsIndicator type="card" size="large" color="neutral" column>
            <FaRegGem size={16} /> 
            <Points>{cardsPoints}</Points>
          </PointsIndicator>
          <PointsIndicator type="tile" size="large" color="neutral" column data-testid={testIds.aristocratsIndicator}>
            <GiQueenCrown size={16} />
            <Points data-testid={testIds.aristocratsPoints}>{aristocratsPoints}</Points>
          </PointsIndicator>
        </PointsIndicators>
      </BottomSection>
    </Container>
  )
}

const Container = styled(Panel, {
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$small'
})

const TopSection = styled(Row, {
  height: 'fit-content',
  minHeight: 348,
  '@lowResolution': {
    minHeight: 192
  }
})

const BottomSection = styled(Row)

const PointsIndicators = styled(Row)

const Points = styled('span')
