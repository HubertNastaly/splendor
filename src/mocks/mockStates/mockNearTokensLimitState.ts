import { MockState, Store, TOKEN_COLORS, Tokens } from '@/types';
import { mockInitialState } from './mockInitialState';
import { transfer } from '@/helpers';

const PLAYER_TOKENS: Tokens = {
  black: 2,
  blue: 2,
  green: 2,
  red: 1,
  white: 1,
  gold: 1
}

function mockState(): Store {
  const state = mockInitialState.mockState()
  const { players, currentPlayerIndex, bank } = state
  const currentPlayer = players[currentPlayerIndex]

  for(const color of TOKEN_COLORS) {
    transfer(bank, currentPlayer.tokens, color, PLAYER_TOKENS[color])
  }

  return { ...state, players, bank }
}

export const mockNearTokensLimitState: MockState & { playerTokens: Tokens } = {
  mockState,
  playerTokens: PLAYER_TOKENS
}
