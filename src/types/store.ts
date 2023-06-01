import { Tokens } from './color'
import { CardsByLevel, NullableCardsByLevel } from './card'
import { Player } from './player'

export type GameState = 'setup' | 'started' | 'ended'

export interface Store {
  decksByLevel: CardsByLevel
  boardCardsByLevel: NullableCardsByLevel
  bank: Tokens
  gameState: GameState
  players: Player[]
  currentPlayerIndex: number
  purchaseTokens: Tokens
}
