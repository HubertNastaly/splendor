import { History, StateObject } from '@/types';
import { clone } from '@/utils';
import { createAction } from '@reduxjs/toolkit';

export const redoAction = createAction('REDO')
export type RedoAction = ReturnType<typeof redoAction>

export function redo<S extends StateObject>(history: History<S>): History<S> {
  const newHistory = clone(history)

  const closestFutureState = newHistory.future.shift()
  if(!closestFutureState) {
    throw new Error('Cannot redo')
  }

  const currentState = clone(newHistory.present)

  newHistory.present = { state: closestFutureState, undoable: false }
  newHistory.past.push(currentState.state)

  return newHistory
}
