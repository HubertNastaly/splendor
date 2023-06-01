export const BASIC_COLORS = ['white', 'blue', 'green', 'red', 'black'] as const
export const TOKEN_COLORS = [...BASIC_COLORS, 'gold'] as const

export type BasicColor = typeof BASIC_COLORS[number]
export type Color = typeof TOKEN_COLORS[number]

export type Tokens = Record<Color, number>
