import { CardsCollection } from './card'
import { Tokens } from './color'
import { Player } from './player'

type GameState = 'setup' | 'started' | 'ended'

export interface Store {
  decksByLevel: CardsCollection,
  boardCardsByLevel: CardsCollection,
  bankTokens: Tokens,
  gameState: GameState,
  players: Player[],
  currentPlayerIndex: number
}
