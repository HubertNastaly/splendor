import { CardData, CardsByColor } from './card'
import { BasicColor, Tokens } from './color'

export type PlayerMovePhase = {
  type: 'NONE'
} | {
  type: '1_TOKEN_COLLECTED',
  tokenColor: BasicColor
} | {
  type: '2_SAME_TOKENS_COLLECTED',
  tokenColor: BasicColor
} | {
  type: '2_DIFFERENT_TOKENS_COLLECTED',
  tokenColors: [BasicColor, BasicColor]
} | {
  type: '3_TOKENS_COLLECTED',
  tokenColors: [BasicColor, BasicColor, BasicColor]
} | {
  type: 'CARD_SELECTED',
  selectedCard: CardData
} | {
  type: 'CARD_RESERVED'
} | {
  type: 'CARD_PURCHASE_STARTED'
  selectedCard: CardData
}

export interface Player {
  name: string
  tokens: Tokens
  movePhase: PlayerMovePhase
  cards: CardsByColor
  reservedCards: CardData[]
}
