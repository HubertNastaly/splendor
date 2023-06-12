import { CardLevel, CardsByLevel } from '@/types'
import { shuffle } from '@/utils'

export function shuffleDecks(decks: CardsByLevel) {
  for(const key in decks) {
    const level = parseInt(key) as CardLevel
    decks[level] = shuffle(decks[level])
  }

  return decks
}
