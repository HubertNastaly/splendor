import { useAppDispatch, useAppSelector } from '@/store'
import { Card } from './Card'
import { styled } from '@/theme'

interface Props {
  className?: string
}

export const Board = ({ className }: Props) => {
  const cardsByLevel = useAppSelector(({ boardCardsByLevel }) => boardCardsByLevel)
  const selectedCard = useAppSelector(({ selectedCard }) => selectedCard)
  const dispatch = useAppDispatch()

  const allCards = [...cardsByLevel[3], ...cardsByLevel[2], ...cardsByLevel[1]]

  return (
    <Grid className={className}>
      {allCards.map((card, index) => (
        <Card
          key={`card-${index}`}
          card={card}
          isSelected={selectedCard ? selectedCard.id === card.id : false}
          onSelect={() => dispatch({ type: 'SELECT_CARD', payload: { selectedCard: card } })}
        />
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
