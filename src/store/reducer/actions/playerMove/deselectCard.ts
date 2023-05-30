import { Store } from '@/types';
import { clone } from '@/utils';
import { Action } from '@reduxjs/toolkit';

export type DeselectCardAction = Action<'DESELECT_CARD'>

export function deselectCard(state: Store): Store {
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]

  if(currentPlayer.movePhase.type !== 'CARD_SELECTED') {
    throw new Error('No card is selected')
  }
  currentPlayer.movePhase = { type: 'NONE' }

  return {
    ...state,
    players
  }
}
