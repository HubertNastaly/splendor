import { Store } from '@/types';
import { clone } from '@/utils';
import { Action } from '@reduxjs/toolkit';

export type DeselectCardAction = Action<'DESELECT_CARD'>

export function deselectCard(state: Store): Store {
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]
  currentPlayer.movePhase = { type: 'NONE' }

  return {
    ...state,
    players
  }
}
