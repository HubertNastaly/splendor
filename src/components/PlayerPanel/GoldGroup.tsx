import { styled } from '@/theme'
import { CardData } from '@/types'
import { Card, Column, Row, TokenCounter } from '@/components/common'
import { CARD_HEIGHT, CARD_WIDTH, MAX_RESERVED_CARDS_LIMIT } from '@/constants'

interface Props {
  goldCount: number
  reservedCards: CardData[]
  onGoldClick?: () => void
}

export const GoldGroup = ({ goldCount, reservedCards, onGoldClick }: Props) => {
  const cardPlaceholders = [...new Array(MAX_RESERVED_CARDS_LIMIT - reservedCards.length)]

  return (
    <Column>
      <TokenCounter
        color="gold"
        count={goldCount}
        onClick={onGoldClick}
      />
      <Row>
        {reservedCards.map((card, index) => (
          <Card
            key={`reserved-card-${index}`}
            card={card}
          />
        ))}
        {cardPlaceholders.map((_, index) => (
          <CardPlaceholder key={`card-placeholder-${index}`} />
        ))}
      </Row>
    </Column>
  )
}

const CardPlaceholder = styled('div', {
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
  borderRadius: 8,
  border: '2px solid white',
  background: 'none'
})
