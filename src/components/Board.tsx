import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Card } from './common'
import { styled } from '@/theme'
import { CardData } from '@/types'
import { canSelectCard, getSelectedCard } from '@/helpers'
import { selectCardAction } from '@/store/actions'

interface Props {
  className?: string
}

export const Board = ({ className }: Props) => {
  const { cardsByLevel, selectedCard, currentPlayer } = useAppSelector(({ boardCardsByLevel, players, currentPlayerIndex }) => {
    const currentPlayer = players[currentPlayerIndex]
    return {
      cardsByLevel: boardCardsByLevel,
      selectedCard: getSelectedCard(currentPlayer),
      currentPlayer
    }
  })
  const dispatch = useAppDispatch()

  const allCards = [...cardsByLevel[3], ...cardsByLevel[2], ...cardsByLevel[1]]

  const select = (card: CardData) => dispatch(selectCardAction({ card, location: 'board' }))
  const canSelect = canSelectCard(currentPlayer)

  return (
    <Grid className={className}>
      {allCards.map((card, index) => (
        card ? (
          <Card
            key={`card-${index}`}
            card={card}
            isSelected={selectedCard ? selectedCard.card.id === card.id : false}
            onSelect={canSelect ? () => select(card) : undefined}
          />
        ) : (
          <div key={`card-${index}`}/>
        )
      ))}
    </Grid>
  )
}

const Grid = styled('div', {
  width: 'fit-content',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  gap: 16
})
