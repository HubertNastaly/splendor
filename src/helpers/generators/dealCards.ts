import { CardLevel, CardsByLevel } from '@/types'
import { createCardsByLevelCollection } from '@/helpers/createEntity'
import { CARDS_PER_LEVEL } from '@/constants'

export function dealCards(decks: CardsByLevel, boardCards = createCardsByLevelCollection()): [decks: CardsByLevel, boardCards: CardsByLevel] {
  for(const key in decks) {
    const level = parseInt(key) as CardLevel
    const deck = decks[level]
    const missingCardsNumber = Math.max(0, CARDS_PER_LEVEL - boardCards[level].length)
    
    boardCards[level].push(...deck.slice(0, missingCardsNumber))
    decks[level].push(...deck.slice(missingCardsNumber))
  }

  return [decks, boardCards]
}
