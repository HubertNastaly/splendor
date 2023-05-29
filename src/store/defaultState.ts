import { Store } from '@/types';
import { createCardsCollection, createTokensCollection } from '@/utils';

export const DEFAULT_STATE: Store = {
  decksByLevel: createCardsCollection(),
  boardCardsByLevel: createCardsCollection(),
  bankTokens: createTokensCollection(),
  gameState: 'setup',
  players: [],
  currentPlayerIndex: 0
}
