import { Color } from "./color"

export type Level = 1 | 2 | 3

export interface CardData {
  level: Level,
  color: Color,
  value: number,
  white: number,
  blue: number,
  green: number
  red: number
  black: number
}

export type CardsCollection = Record<Level, CardData[]>
