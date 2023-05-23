import { CardsCollection, Color } from "./card"
import { Player } from "./player"

type Tokens = Record<Color, number>
type GameState = 'setup' | 'started' | 'ended'

export interface Store {
  decksByLevel: CardsCollection,
  boardCardsByLevel: CardsCollection,
  bankTokens: Tokens,
  gameState: GameState,
  players: Player[]
}
