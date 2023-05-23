import { useAppSelector } from '../store'
import { styled } from '../theme'
import { Card } from './Card'

interface Props {
  className?: string
}

export const Board = ({ className }: Props) => {
  const cardsByLevel = useAppSelector(({ boardCardsByLevel }) => boardCardsByLevel)

  return (
    <Grid className={className}>
      {cardsByLevel[3].map((card, index) => (
        <Card key={`card-3-${index}`} card={card} />
      ))}
      {cardsByLevel[2].map((card, index) => (
        <Card key={`card-2-${index}`} card={card} />
      ))}
      {cardsByLevel[1].map((card, index) => (
        <Card key={`card-1-${index}`} card={card} />
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
