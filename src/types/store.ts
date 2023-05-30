import { Bank } from './bank'
import { CardsCollection, NullableCardsCollection } from './card'
import { Player } from './player'

type GameState = 'setup' | 'started' | 'ended'

export interface Store {
  decksByLevel: CardsCollection,
  boardCardsByLevel: NullableCardsCollection,
  bank: Bank,
  gameState: GameState,
  players: Player[],
  currentPlayerIndex: number
}
