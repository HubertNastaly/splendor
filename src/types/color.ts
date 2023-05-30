export const COLORS = ['white', 'blue', 'green', 'red', 'black'] as const

export type BasicColor = typeof COLORS[number]
export type GemColor = BasicColor | 'gold'

export type Tokens = Record<BasicColor, number>

