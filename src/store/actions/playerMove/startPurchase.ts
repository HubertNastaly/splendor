import { CardData, Store } from '@/types';
import { clone } from '@/utils';
import { createAction } from '@reduxjs/toolkit';

export const startPurchaseAction = createAction('START_PURCHASE', (selectedCard: CardData) => ({ payload: { selectedCard }}))
export type StartPurchaseAction = ReturnType<typeof startPurchaseAction>

export function startPurchase(state: Store, { payload: { selectedCard } }: StartPurchaseAction): Store {
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]

  currentPlayer.movePhase = { type: 'CARD_PURCHASE_STARTED', selectedCard }

  return { ...state, players }
}
