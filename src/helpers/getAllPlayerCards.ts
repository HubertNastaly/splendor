import { CardsByColor } from '@/types';

export function getAllPlayerCards(cards: CardsByColor) {
  return Object.values(cards).flat()
}
