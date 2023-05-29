import { Store } from '@/types';
import { createCardsCollection, createTokensCollection } from '@/utils';

export const DEFAULT_STATE: Store = {
  decksByLevel: createCardsCollection(),
  boardCardsByLevel: createCardsCollection(),
  bank: {
    tokens: createTokensCollection(),
    gold: 0
  },
  gameState: 'setup',
  players: [],
  currentPlayerIndex: 0,
  selectedCard: null
}
