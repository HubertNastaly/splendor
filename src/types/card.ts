import { BasicColor, Tokens } from './color'

export const CARD_LEVELS = [1, 2, 3] as const

export type CardLevel = typeof CARD_LEVELS[number]

export interface CardData {
  id: number
  level: CardLevel,
  color: BasicColor,
  value: number,
  price: Tokens
}

export type CardsByLevel = Record<CardLevel, CardData[]>
export type NullableCardsByLevel = Record<CardLevel, (CardData|null)[]>

export type CardsByColor = Record<BasicColor, CardData[]>

export interface SelectedCard {
  card: CardData
  location: 'board' | 'player'
}
