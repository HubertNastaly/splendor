import { BasicColor, Tokens } from './color'

export type CardLevel = 1 | 2 | 3

export interface CardData {
  id: number
  level: CardLevel,
  color: BasicColor,
  value: number,
  price: Tokens
}

export type CardsCollection = Record<CardLevel, CardData[]>
export type NullableCardsCollection = Record<CardLevel, (CardData|null)[]>
