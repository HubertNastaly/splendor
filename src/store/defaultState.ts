import { Store } from "../types";
import { createCardsCollection } from "../utils/createCardsCollection";

export const DEFAULT_STATE: Store = {
  decksByLevel: createCardsCollection(),
  boardCardsByLevel: createCardsCollection()
}
