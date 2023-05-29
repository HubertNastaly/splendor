import { Color, Tokens } from './color'

export type CardLevel = 1 | 2 | 3

export interface CardData {
  id: number
  level: CardLevel,
  color: Color,
  value: number,
  price: Tokens
}

export type CardsCollection = Record<CardLevel, CardData[]>
