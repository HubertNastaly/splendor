import { Color, Tokens } from './color'

export type Level = 1 | 2 | 3

export interface CardData {
  level: Level,
  color: Color,
  value: number,
  price: Tokens
}

export type CardsCollection = Record<Level, CardData[]>
