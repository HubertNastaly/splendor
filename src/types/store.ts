import { CardsCollection, Color } from "./card"

type Tokens = Record<Color, number>

export interface Store {
  decksByLevel: CardsCollection,
  boardCardsByLevel: CardsCollection,
  bankTokens: Tokens
}
