import { Store } from '@/types';
import { createCardsByLevelCollection, createTokensCollection } from '@/helpers';
import { toHistory } from '@/utils';

export const getDefaultState = (): Store => ({
  decksByLevel: createCardsByLevelCollection(),
  boardCardsByLevel: createCardsByLevelCollection(),
  aristocrats: [],
  bank: createTokensCollection(),
  gameState: { type: 'setup' },
  players: [],
  currentPlayerIndex: 0,
  purchaseTokens: createTokensCollection()
})

export const getDefaultHistory = () => toHistory(getDefaultState())
