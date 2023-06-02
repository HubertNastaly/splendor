import { History } from "@/types";
import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { HistoryAction, undo } from "@/store/actions";
import { clone } from "@/utils";

export function undoableReducer<S extends object, A extends AnyAction>(reducer: Reducer<S, Exclude<A, HistoryAction>>) {
  return (history: History<S> = {} as History<S>, action: A): History<S> => {
    switch(action.type) {
      case 'UNDO':
        return undo(history)
      default: {
        // TODO: figure out why the action type is not narrowed here
        const present = reducer(history.present, action as Exclude<A, HistoryAction>)
        const newHistory = clone(history)
        newHistory.past.push(history.present)
        newHistory.present = present
        return newHistory
      }
    }
  }
}
