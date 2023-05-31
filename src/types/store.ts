import { Tokens } from './color'
import { CardsCollection, NullableCardsCollection } from './card'
import { Player } from './player'

export type GameState = 'setup' | 'started' | 'ended'

export interface Store {
  decksByLevel: CardsCollection
  boardCardsByLevel: NullableCardsCollection
  bank: Tokens
  gameState: GameState
  players: Player[]
  currentPlayerIndex: number
  purchaseTokens: Tokens
}
