import { DEFAULT_NAMES } from '@/constants';
import { createPlayer, createTokensCollection, generateAristocrats, generateBank, generateBoard } from '@/helpers';
import { MockState, Store } from '@/types';

const PLAYERS_NUMBER = DEFAULT_NAMES.length

const mockState = (): Store => ({
  ...generateBoard(),
  aristocrats: generateAristocrats(PLAYERS_NUMBER),
  bank: generateBank(PLAYERS_NUMBER),
  players: DEFAULT_NAMES.map(createPlayer),
  gameState: 'started',
  currentPlayerIndex: 0,
  purchaseTokens: createTokensCollection()
})

export const mockInitialState: MockState = { mockState }
