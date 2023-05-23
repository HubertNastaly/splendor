import { CardsCollection } from "./card"
import { Color } from "./color"
import { Player } from "./player"

export type Tokens = Record<Color, number>
type GameState = 'setup' | 'started' | 'ended'

export interface Store {
  decksByLevel: CardsCollection,
  boardCardsByLevel: CardsCollection,
  bankTokens: Tokens,
  gameState: GameState,
  players: Player[],
  currentPlayerIndex: number
}
