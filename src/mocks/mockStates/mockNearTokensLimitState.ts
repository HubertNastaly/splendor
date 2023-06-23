import { Store, TOKEN_COLORS, Tokens } from '@/types';
import { mockInitialState } from '.';
import { transfer } from '@/helpers';

export const PLAYER_TOKENS: Tokens = {
  black: 2,
  blue: 2,
  green: 2,
  red: 1,
  white: 1,
  gold: 1
}

export function mockNearTokensLimitState(): Store {
  const state = mockInitialState()
  const { players, currentPlayerIndex, bank } = state
  const currentPlayer = players[currentPlayerIndex]

  for(const color of TOKEN_COLORS) {
    transfer(bank, currentPlayer.tokens, color, PLAYER_TOKENS[color])
  }

  return { ...state, players, bank }
}
