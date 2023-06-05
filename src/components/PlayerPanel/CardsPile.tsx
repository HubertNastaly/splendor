import { styled } from '@/theme'
import { CardData } from '@/types'
import { Card, Column } from '@/components/common'
import { CARD_HEIGHT, CARD_TOPBAR_HEIGHT } from '@/constants'

interface Props {
  cards: CardData[]
}

export const CardsPile = ({ cards }: Props) => {
  return (
    <Pile gap="none">
      {cards.map((card, index) => (
        <CardStyled
          key={`pile-card-${card.id}`}
          index={index}
          card={card}
        />
      ))}
    </Pile>
  )
}

const Pile = styled(Column, {
  position: 'relative'
})

const indexVariants = Object.fromEntries(
  [...new Array(10)].map((_, idx) => [idx, {
    marginTop: -idx * CARD_HEIGHT.highResolution + CARD_TOPBAR_HEIGHT.highResolution * idx + idx,
    zIndex: idx,
    '@lowResolution': {
      marginTop: -idx * CARD_HEIGHT.lowResolution + CARD_TOPBAR_HEIGHT.lowResolution * idx + idx
    }
  }])
)

const CardStyled = styled(Card, {
  variants: {
    index: {
      ...indexVariants
    }
  }
})
