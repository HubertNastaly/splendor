import { CardsByColor } from '@/types';
import { sum } from '@/utils';
import { getAllPlayerCards } from '@/helpers/getAllPlayerCards';

export function sumCardsPoints(cards: CardsByColor) {
  const allCards = getAllPlayerCards(cards)
  return sum(allCards.map(({ value }) => value))
}
