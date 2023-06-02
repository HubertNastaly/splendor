import { History } from "@/types";
import { clone } from "@/utils";
import { createAction } from "@reduxjs/toolkit";

export const undoAction = createAction('UNDO')
export type UndoAction = ReturnType<typeof undoAction>

export function undo<S extends object>(history: History<S>): History<S> {
  const newHistory = clone(history)

  const lastState = newHistory.past.pop()
  if(!lastState) {
    throw new Error('Cannot undo')
  }

  const currentState = clone(newHistory.present)

  newHistory.present = lastState
  newHistory.future.unshift(currentState)

  return newHistory
}
