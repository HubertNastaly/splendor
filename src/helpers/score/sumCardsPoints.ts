import { CardsByColor } from '@/types';
import { sum } from '@/utils';

export function sumCardsPoints(cards: CardsByColor) {
  const allCards = Object.values(cards).flat()
  return sum(allCards.map(({ value }) => value))
}
