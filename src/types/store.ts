import { CardsCollection } from "./card"

export interface Store {
  decksByLevel: CardsCollection,
  boardCardsByLevel: CardsCollection
}
