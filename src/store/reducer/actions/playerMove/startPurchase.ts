import { CardData, Store } from '@/types';
import { clone } from '@/utils';
import { PayloadAction } from '@reduxjs/toolkit';

export type StartPurchaseAction = PayloadAction<{ selectedCard: CardData }, 'START_PURCHASE'>

export function startPurchase(state: Store, { payload: { selectedCard } }: StartPurchaseAction): Store {
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]

  currentPlayer.movePhase = { type: 'CARD_PURCHASE_STARTED', selectedCard }

  return { ...state, players }
}
