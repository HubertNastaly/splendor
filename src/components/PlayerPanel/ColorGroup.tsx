import { styled } from '@/theme'
import { BasicColor, CardData } from '@/types'
import { Column, TokenCounter } from '@/components/common'
import { CardsPile } from './CardsPile'
import { CARD_WIDTH } from '@/constants'

interface Props {
  color: BasicColor
  cards: CardData[]
  tokensCount: number
  onTokenClick?: () => void
}

export const ColorGroup = ({ color, tokensCount, cards, onTokenClick }: Props) => {
  return (
    <Container>
      <TokenCounter
        color={color}
        count={tokensCount}
        onClick={onTokenClick}
      />
      <CardsPile cards={cards} color={color} />
    </Container>
  )
}

const Container = styled(Column, {
  width: CARD_WIDTH.highResolution,
  '@lowResolution': {
    width: CARD_WIDTH.lowResolution
  }
})
