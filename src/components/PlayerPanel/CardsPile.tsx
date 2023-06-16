import { styled } from '@/theme'
import { BasicColor, CardData } from '@/types'
import { Card, CardPlaceholder, Column } from '@/components/common'
import { CARD_HEIGHT, CARD_TOPBAR_HEIGHT, testIds } from '@/constants'

interface Props {
  cards: CardData[]
  color: BasicColor
}

export const CardsPile = ({ cards, color }: Props) => {
  return cards.length > 0 ? (
    <Pile gap="none" data-testid={testIds.pile(color)}>
      {cards.map((card, index) => (
        <CardStyled
          key={`pile-card-${card.id}`}
          index={index}
          card={card}
        />
      ))}
    </Pile>
  ) : (
    <CardPlaceholder data-testid={testIds.pile(color)} />
  )
}

const Pile = styled(Column, {
  position: 'relative'
})

const positiveIndexVariants = Object.fromEntries(
  [...new Array(9)].map((_, idx) => [idx + 1, {
    marginTop: calculateMarginTop(CARD_HEIGHT.highResolution, CARD_TOPBAR_HEIGHT.highResolution),
    zIndex: idx + 1,
    '@lowResolution': {
      marginTop: calculateMarginTop(CARD_HEIGHT.lowResolution, CARD_TOPBAR_HEIGHT.lowResolution)
    }
  }])
)

const CardStyled = styled(Card, {
  variants: {
    index: {
      '0': {
        zIndex: 0
      },
      ...positiveIndexVariants
    }
  }
})

function calculateMarginTop(cardHeight: number, cardTopbarHeight: number) {
  return -cardHeight + cardTopbarHeight + 1
}
