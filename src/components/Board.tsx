import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Card } from './Card'
import { styled } from '@/theme'
import { CardData } from '@/types'
import { canSelectCard } from '@/helpers'

interface Props {
  className?: string
}

export const Board = ({ className }: Props) => {
  const { cardsByLevel, selectedCard, currentPlayer } = useAppSelector(({ boardCardsByLevel, players, currentPlayerIndex }) => {
    const currentPlayer = players[currentPlayerIndex]
    const { movePhase } = currentPlayer
    return {
      cardsByLevel: boardCardsByLevel,
      selectedCard: movePhase.type === 'CARD_SELECTED' ? movePhase.selectedCard : null,
      currentPlayer
    }
  })
  const dispatch = useAppDispatch()

  const allCards = [...cardsByLevel[3], ...cardsByLevel[2], ...cardsByLevel[1]]

  const select = (card: CardData) => dispatch({ type: 'SELECT_CARD', payload: { selectedCard: card } })
  const canSelect = canSelectCard(currentPlayer)

  return (
    <Grid className={className}>
      {allCards.map((card, index) => (
        card ? (
          <Card
            key={`card-${index}`}
            card={card}
            isSelected={selectedCard ? selectedCard.id === card.id : false}
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
