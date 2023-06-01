import { Store } from '@/types';
import { createCardsByLevelCollection, createTokensCollection } from '@/helpers';

export const getDefaultState = (): Store => ({
  decksByLevel: createCardsByLevelCollection(),
  boardCardsByLevel: createCardsByLevelCollection(),
  bank: createTokensCollection(),
  gameState: 'setup',
  players: [],
  currentPlayerIndex: 0,
  purchaseTokens: createTokensCollection()
})
