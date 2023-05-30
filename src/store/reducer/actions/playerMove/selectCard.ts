import { CardData, Store } from '@/types';
import { clone } from '@/utils';
import { PayloadAction } from '@reduxjs/toolkit';

export type SelectCardAction = PayloadAction<{ selectedCard: CardData }, 'SELECT_CARD'>

export function selectCard(state: Store, { payload: { selectedCard } }: SelectCardAction): Store {
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]

  if(currentPlayer.movePhase.type !== 'NONE') {
    throw new Error('Cannot select card')
  }
  currentPlayer.movePhase = { type: 'CARD_SELECTED', selectedCard }

  return {
    ...state,
    players
  }
}
