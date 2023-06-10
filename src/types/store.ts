import { Tokens } from './color'
import { CardsByLevel, NullableCardsByLevel } from './card'
import { Player } from './player'
import { Aristocrat } from './aristocrat'

export type GameState = {
  type: 'setup'
} | {
  type: 'started'
} | {
  type: 'ended'
}

export interface Store {
  decksByLevel: CardsByLevel
  boardCardsByLevel: NullableCardsByLevel
  aristocrats: Aristocrat[]
  bank: Tokens
  gameState: GameState
  players: Player[]
  currentPlayerIndex: number
  purchaseTokens: Tokens
}
