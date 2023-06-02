import { Store } from "@/types"
import { Action } from "./actions"
import { gameReducer, undoableReducer } from "./reducers"

const EXCLUDED_ACTIONS: Action['type'][] = [
  'CANCEL_PURCHASE',
  'DESELECT_CARD',
  'PAY_TOKEN',
  'SELECT_CARD',
  'START_GAME',
  'UNDO'
]

export const mainReducer = undoableReducer<Store, Action>(gameReducer, EXCLUDED_ACTIONS)
