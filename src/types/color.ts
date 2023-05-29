export const COLORS = ['white', 'blue', 'green', 'red', 'black'] as const

export type Color = typeof COLORS[number]

export type Tokens = Record<Color, number>

