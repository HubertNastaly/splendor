import { DEFAULT_NAMES } from '@/constants';
import { createPlayer, createTokensCollection, generateAristocrats, generateBank, generateBoard } from '@/helpers';
import { Store, History } from '@/types';

const playersNumber = DEFAULT_NAMES.length

export const mockState = (): Store => ({
  ...generateBoard(),
  aristocrats: generateAristocrats(playersNumber),
  bank: generateBank(playersNumber),
  players: DEFAULT_NAMES.map(createPlayer),
  gameState: 'started',
  currentPlayerIndex: 0,
  purchaseTokens: createTokensCollection()
})

export const mockHistory = (): History<Store> => ({
  past: [],
  present: { state: mockState() },
  future: []
})
