import { transfer } from '@/helpers';
import { Color, Store } from '@/types';
import { clone } from '@/utils';
import { PayloadAction } from '@reduxjs/toolkit';

export type ReturnTokenAction = PayloadAction<{ tokenColor: Color }, 'RETURN_TOKEN'>

export function returnToken(state: Store, { payload: { tokenColor }}: ReturnTokenAction): Store {
  const { currentPlayerIndex } = state
  const players = clone(state.players)
  const bank = clone(state.bank)

  const currentPlayer = players[currentPlayerIndex]

  if(currentPlayer.tokens[tokenColor] === 0) {
    throw new Error('No tokens to return')
  }

  transfer(currentPlayer.tokens, bank, tokenColor, 1)

  return {
    ...state,
    players,
    bank
  }
}
