import { Store, History } from '@/types';
import { createCardsByLevelCollection, createTokensCollection } from '@/helpers';

export const getDefaultState = (): Store => ({
  decksByLevel: createCardsByLevelCollection(),
  boardCardsByLevel: createCardsByLevelCollection(),
  aristocrats: [],
  bank: createTokensCollection(),
  gameState: 'setup',
  players: [],
  currentPlayerIndex: 0,
  purchaseTokens: createTokensCollection()
})

export const getDefaultHistory = (): History<Store> => ({
  past: [],
  present: { state: getDefaultState() },
  future: []
})
