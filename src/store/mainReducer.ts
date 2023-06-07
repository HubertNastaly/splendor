import { Store } from '@/types'
import { Action, DevModeAction, GameAction, } from './actions'
import { gameReducer, undoableReducer, devModeReducer } from './reducers'
import { getDefaultState } from './defaultState'

const EXCLUDED_ACTIONS: Action['type'][] = [
  'CANCEL_PURCHASE',
  'DESELECT_CARD',
  'PAY_TOKEN',
  'SELECT_CARD',
  'START_GAME',
  'UNDO'
]

function combinedReducer(state: Store = getDefaultState(), action: GameAction | DevModeAction): Store {
  if(action.type === 'LOAD_STATE') {
    return devModeReducer(state, action)
  } else {
    return gameReducer(state, action)
  }
}

export const mainReducer = undoableReducer<Store, Action>(combinedReducer, EXCLUDED_ACTIONS)
