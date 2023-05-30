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

export type CardsCollection = Record<CardLevel, CardData[]>
export type NullableCardsCollection = Record<CardLevel, (CardData|null)[]>
