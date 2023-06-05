import { canSelectCard } from '@/helpers';
import { SelectedCard, Store } from '@/types';
import { clone } from '@/utils';
import { createAction } from '@reduxjs/toolkit';

export const selectCardAction = createAction('SELECT_CARD', (selectedCard: SelectedCard) => ({ payload: { selectedCard }}))
export type SelectCardAction = ReturnType<typeof selectCardAction>

export function selectCard(state: Store, { payload: { selectedCard } }: SelectCardAction): Store {
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]

  if(!canSelectCard(currentPlayer)) {
    throw new Error('Cannot select card')
  }
  currentPlayer.movePhase = { type: 'CARD_SELECTED', selectedCard }

  return {
    ...state,
    players
  }
}
