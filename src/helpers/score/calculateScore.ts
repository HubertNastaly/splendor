import { sumCardsPoints } from './sumCardsPoints';
import { sumAristocratsPoints } from './sumAristocratsPoints';
import { Player } from '@/types';

export function calculateScore({ cards, aristocrats }: Player) {
  return sumCardsPoints(cards) + sumAristocratsPoints(aristocrats)
}
