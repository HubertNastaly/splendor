import { styled } from '@/theme'
import { CardData, Color } from '@/types'
import { Column, TokenCounter } from '@/components/common'
import { CardsPile } from './CardsPile'
import { CARD_WIDTH } from '@/constants'

interface Props {
  color: Color
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
      <CardsPile cards={cards} />
    </Container>
  )
}

const Container = styled(Column, {
  width: CARD_WIDTH
})
