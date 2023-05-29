import { Store } from '@/types';
import { Action } from '@reduxjs/toolkit';

export type DeselectCardAction = Action<'DESELECT_CARD'>

export function deselectCard(state: Store): Store {
  return {
    ...state,
    selectedCard: null
  }
}
