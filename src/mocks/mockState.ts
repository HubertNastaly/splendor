import { DEFAULT_NAMES } from '@/constants';
import { createPlayer, createTokensCollection, generateBank, generateBoard } from '@/helpers';
import { Store } from '@/types';

export const mockState = (): Store => ({
  ...generateBoard(),
  bank: generateBank(DEFAULT_NAMES.length),
  players: DEFAULT_NAMES.map(createPlayer),
  gameState: 'started',
  currentPlayerIndex: 0,
  purchaseTokens: createTokensCollection()
})
