import { DEFAULT_NAMES } from '@/constants';
import { createPlayer, createTokensCollection, generateAristocrats, generateBank, generateBoard } from '@/helpers';
import { Store } from '@/types';

const playersNumber = DEFAULT_NAMES.length

export const mockInitialState = (): Store => ({
  ...generateBoard(),
  aristocrats: generateAristocrats(playersNumber),
  bank: generateBank(playersNumber),
  players: DEFAULT_NAMES.map(createPlayer),
  gameState: 'started',
  currentPlayerIndex: 0,
  purchaseTokens: createTokensCollection()
})
