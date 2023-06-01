import { CardData, NullableCardsByLevel } from '@/types'

export function pickCardFromBoard(boardCardsByLevel: NullableCardsByLevel, pickedCard: CardData) {
  const pickedCardIndex = boardCardsByLevel[pickedCard.level].findIndex(card => card ? card.id === pickedCard.id : false)
  boardCardsByLevel[pickedCard.level][pickedCardIndex] = null
}
