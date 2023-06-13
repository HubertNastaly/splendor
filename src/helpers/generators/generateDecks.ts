import allCards from '@/data/cards.json'
import { CardData, CardsByLevel } from '@/types';
import { createCardsByLevelCollection } from '@/helpers/createEntity';

export function generateDecks(): CardsByLevel {
  const decksByLevel: CardsByLevel = createCardsByLevelCollection()
  ;(allCards as CardData[]).forEach(card => decksByLevel[card.level].push(card))

  return decksByLevel
}
