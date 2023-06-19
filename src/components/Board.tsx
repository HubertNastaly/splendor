import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { AristocratTile, Card, Column, Row } from './common'
import { styled } from '@/theme'
import { CardData } from '@/types'
import { canSelectCard, getSelectedCard } from '@/helpers'
import { selectCardAction } from '@/store/actions'
import { testIds } from '@/constants'

interface Props {
  className?: string
}

export const Board = ({ className }: Props) => {
  const { cardsByLevel, selectedCard, currentPlayer, aristocrats } = useAppSelector(({ boardCardsByLevel, players, aristocrats, currentPlayerIndex }) => {
    const currentPlayer = players[currentPlayerIndex]
    return {
      cardsByLevel: boardCardsByLevel,
      selectedCard: getSelectedCard(currentPlayer),
      currentPlayer,
      aristocrats
    }
  })
  const dispatch = useAppDispatch()

  const allCards = [...cardsByLevel[3], ...cardsByLevel[2], ...cardsByLevel[1]]

  const select = (card: CardData) => dispatch(selectCardAction({ card, location: 'board' }))
  const canSelect = canSelectCard(currentPlayer)

  return (
    <Column className={className}>
      <Aristocrats gap={{ '@initial': 'small', '@lowResolution': 'tiny' }} justify="start" data-testid={testIds.boardAristocrats}>
        {aristocrats.map(aristocrat => (
          <AristocratTile key={`aristocrat-${aristocrat.id}`} aristocrat={aristocrat} />
        ))}
      </Aristocrats>
      <Grid data-testid={testIds.boardCards}>
        {allCards.map((card, index) => card ? (
          <Card
            key={`card-${index}`}
            card={card}
            isSelected={selectedCard ? selectedCard.card.id === card.id : false}
            onSelect={canSelect ? () => select(card) : undefined}
          />
        ) : (
          <EmptyCardPlace key={`card-${index}`}/>
        ))}
      </Grid>
    </Column>
  )
}

const Aristocrats = styled(Row, {
  width: '100%'
})

const Grid = styled('div', {
  height: 'fit-content',
  width: 'fit-content',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  gap: '$small',

  '@lowResolution': {
    gap: '$tiny'
  }
})

const EmptyCardPlace = styled('div')
