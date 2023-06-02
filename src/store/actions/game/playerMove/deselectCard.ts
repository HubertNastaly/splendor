import { Store } from '@/types';
import { clone } from '@/utils';
import { createAction } from '@reduxjs/toolkit';

export const deselectCardAction = createAction('DESELECT_CARD')
export type DeselectCardAction = ReturnType<typeof deselectCardAction>

export function deselectCard(state: Store): Store {
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]

  if(currentPlayer.movePhase.type !== 'CARD_SELECTED') {
    return state
  }

  currentPlayer.movePhase = { type: 'NONE' }

  return {
    ...state,
    players
  }
}
