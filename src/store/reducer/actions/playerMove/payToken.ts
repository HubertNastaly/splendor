import { canPayToken, transfer } from "@/helpers";
import { Color, Store } from "@/types";
import { clone } from "@/utils";
import { PayloadAction } from "@reduxjs/toolkit";

export type PayTokenAction = PayloadAction<{ tokenColor: Color }, 'PAY_TOKEN'>

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
