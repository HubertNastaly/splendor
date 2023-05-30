import { CardData, Store } from '@/types';
import { clone } from '@/utils';
import { PayloadAction } from '@reduxjs/toolkit';

export type SelectCardAction = PayloadAction<{ selectedCard: CardData }, 'SELECT_CARD'>

export function selectCard(state: Store, { payload: { selectedCard } }: SelectCardAction): Store {
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]
  currentPlayer.movePhase = { type: 'CARD_SELECTED', selectedCard }

  return {
    ...state,
    players
  }
}
