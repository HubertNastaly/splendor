export const COLORS = ['white', 'blue', 'green', 'red', 'black'] as const

export type BasicColor = typeof COLORS[number]
export type Color = BasicColor | 'gold'

export type Tokens = Record<BasicColor, number>

