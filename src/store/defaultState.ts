import { Store } from "../types";
import { createCardsCollection } from "../utils/createCardsCollection";
import { createTokensCollection } from "../utils/createTokensCollection";

export const DEFAULT_STATE: Store = {
  decksByLevel: createCardsCollection(),
  boardCardsByLevel: createCardsCollection(),
  bankTokens: createTokensCollection(),
  gameState: 'setup',
  players: [],
  currentPlayerIndex: 0
}
