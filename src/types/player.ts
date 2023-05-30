import { CardData } from './card'
import { Color, Tokens } from './color'

export type PlayerMovePhase = {
  type: 'NONE'
} | {
  type: '1_TOKEN_COLLECTED',
  tokenColor: Color
} | {
  type: '2_SAME_TOKENS_COLLECTED',
  tokenColor: Color
} | {
  type: '2_DIFFERENT_TOKENS_COLLECTED',
  tokenColors: [Color, Color]
} | {
  type: '3_TOKENS_COLLECTED',
  tokenColors: [Color, Color, Color]
} | {
  type: 'CARD_SELECTED',
  selectedCard: CardData
} | {
  type: 'CARD_RESERVED'
}

export interface Player {
  name: string
  tokens: Tokens
  movePhase: PlayerMovePhase
  gold: number
  reservedCards: CardData[]
}
