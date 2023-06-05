import { canPayToken, transfer } from '@/helpers';
import { Color, Store } from '@/types';
import { clone } from '@/utils';
import { createAction } from '@reduxjs/toolkit';

export const payTokenAction = createAction('PAY_TOKEN', (tokenColor: Color) => ({ payload: { tokenColor }}))
export type PayTokenAction = ReturnType<typeof payTokenAction>

export function payToken(state: Store, { payload: { tokenColor }}: PayTokenAction): Store {
  const players = clone(state.players)
  const purchaseTokens = clone(state.purchaseTokens)
  const currentPlayer = players[state.currentPlayerIndex]

  if(!canPayToken(currentPlayer)) {
    throw new Error('Cannot pay token in current phase')
  }

  transfer(currentPlayer.tokens, purchaseTokens, tokenColor, 1)

  return { ...state, players, purchaseTokens }
}
