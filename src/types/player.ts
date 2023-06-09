import { Aristocrat } from './aristocrat'
import { CardData, CardsByColor, SelectedCard } from './card'
import { BasicColor, Tokens } from './color'

export type PlayerMovePhase = {
  type: 'NONE'
} | {
  type: '1_TOKEN_COLLECTED',
  tokenColor: BasicColor
} | {
  type: '2_DIFFERENT_TOKENS_COLLECTED',
  tokenColors: [BasicColor, BasicColor]
} | {
  type: 'ALL_TOKENS_COLLECTED',
  tokenColors: BasicColor[]
} | {
  type: 'CARD_SELECTED',
  selectedCard: SelectedCard
} | {
  type: 'CARD_RESERVED'
} | {
  type: 'CARD_PURCHASE_STARTED'
  selectedCard: SelectedCard
} | {
  type: 'CARD_BOUGHT'
} | {
  type: 'ARISTOCRAT_COLLECTED'
}

export interface Player {
  name: string
  tokens: Tokens
  movePhase: PlayerMovePhase
  cards: CardsByColor
  reservedCards: CardData[]
  aristocrats: Aristocrat[]
}
