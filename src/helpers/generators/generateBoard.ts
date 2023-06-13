import { CardsByLevel } from '@/types';
import { dealCards, generateDecks, shuffleDecks } from '@/helpers';

export function generateBoard(): { decksByLevel: CardsByLevel, boardCardsByLevel: CardsByLevel } {
  const decksByLevel = generateDecks()
  const shuffledDecks = shuffleDecks(decksByLevel)
  const [decksAfterDeal, boardCards] = dealCards(shuffledDecks)

  return {
    decksByLevel: decksAfterDeal,
    boardCardsByLevel: boardCards
  }
}
