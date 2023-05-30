import { Bank } from './bank'
import { CardsCollection } from './card'
import { Player } from './player'

type GameState = 'setup' | 'started' | 'ended'

export interface Store {
  decksByLevel: CardsCollection,
  boardCardsByLevel: CardsCollection,
  bank: Bank,
  gameState: GameState,
  players: Player[],
  currentPlayerIndex: number
}
