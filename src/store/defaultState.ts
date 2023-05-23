import { Store } from "../types";
import { createCardsCollection } from "../utils/createCardsCollection";

export const DEFAULT_STATE: Store = {
  decksByLevel: createCardsCollection(),
  boardCardsByLevel: createCardsCollection(),
  bankTokens: {
    white: 0,
    blue: 0,
    green: 0,
    red: 0,
    black: 0
  },
  gameState: 'setup',
  players: []
}
