import { transfer } from '@/helpers';
import { Color, Store } from '@/types';
import { clone } from '@/utils';
import { Action } from '@reduxjs/toolkit';

export type CancelPurchaseAction = Action<'CANCEL_PURCHASE'>

export function cancelPurchase(state: Store): Store {
  const purchaseTokens = clone(state.purchaseTokens)
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]

  for(const key of Object.keys(purchaseTokens)) {
    const tokenColor = key as Color
    const amount = purchaseTokens[tokenColor]
    transfer(purchaseTokens, currentPlayer.tokens, tokenColor, amount)
  }

  currentPlayer.movePhase = { type: 'NONE' }

  return { ...state, players, purchaseTokens }
}
