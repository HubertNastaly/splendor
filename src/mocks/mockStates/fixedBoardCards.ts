import { CardLevel } from '@/types';

export interface CardLocation {
  level: CardLevel
  id: number
}

export const FIXED_BOARD_CARDS_IDS: Record<CardLevel, number[]> = {
  1: [0, 8, 16, 24],
  2: [40, 46, 52, 58],
  3: [70, 74, 78, 82]
}
