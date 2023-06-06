export const MIN_PLAYERS_NUMBER = 2
export const MAX_PLAYERS_NUMBER = 4
export const CARDS_PER_LEVEL = 4
export const MIN_BANK_TOKENS_TO_PICK_TWO = 4
export const MAX_TOKENS_LIMIT = 10
export const MAX_RESERVED_CARDS_LIMIT = 3
export const DEFAULT_NAMES = ['Adam', 'Bob', 'Cindy']

export const HIGH_RESOLUTION_BREAKPOINT = 1600

type ElementSize = Record<'lowResolution' | 'highResolution', number>

export const TOKEN_SIZE: ElementSize = {
  lowResolution: 36,
  highResolution: 72
}
export const CARD_WIDTH: ElementSize = {
  lowResolution: 80,
  highResolution: 128
}
export const CARD_HEIGHT: ElementSize = {
  lowResolution: 122,
  highResolution: 196
}
export const CARD_TOPBAR_HEIGHT: ElementSize = {
  lowResolution: 32,
  highResolution: 48
}
