import { Store } from "../types";
import { createCardsCollection } from "../utils/createCardsCollection";

export const DEFAULT_STATE: Store = {
  decksByLevel: createCardsCollection(),
  boardCardsByLevel: createCardsCollection(),
  bankTokens: {
    white: 10,
    blue: 10,
    green: 10,
    red: 10,
    black: 10
  },
  gameState: 'setup',
  players: []
}
