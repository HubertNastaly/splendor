import { History, StateObject } from '@/types';
import { Reducer } from '@reduxjs/toolkit';
import { Action, HistoryAction, redo, undo } from '@/store/actions';
import { clone } from '@/utils';

type DecoratedReducer<S extends StateObject, A extends Action> = Reducer<S, Exclude<A, HistoryAction>>

export function undoableReducer<S extends StateObject, A extends Action>(
  reducer: DecoratedReducer<S, A>,
  excludedActions: A['type'][]
) {
  return function (history: History<S> = {} as History<S>, action: A): History<S> {
    switch(action.type) {
      case 'UNDO':
        return undo(history)
      case 'REDO':
        return redo(history)
      default: {
        // TODO: figure out why the action type is not narrowed here
        const present = reducer(history.present.state, action as Exclude<A, HistoryAction>)
        const undoable = !excludedActions.includes(action.type)
        return updatePresentState(history, present, undoable)
      }
    }
  }
}

function updatePresentState<S extends StateObject>(history: History<S>, present: S, undoable: boolean): History<S> {
  const newHistory = clone(history)
  if(history.present.undoable) {
    newHistory.past.push(history.present.state)
  }
  newHistory.present = { state: present, undoable }
  return newHistory
}
