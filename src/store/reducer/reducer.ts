import { Store } from '@/types';
import { Action, deselectCard, finishTurn, pickToken, selectCard, startGame } from './actions';
import { DEFAULT_STATE } from '@/store/defaultState';

export function reducer (state: Store = DEFAULT_STATE, action: Action): Store {
  switch(action.type) {
    case 'START_GAME': {
      return startGame(state, action)
    }
    case 'PICK_TOKEN': {
      return pickToken(state, action)
    }
    case 'SELECT_CARD': {
      return selectCard(state, action)
    }
    case 'DESELECT_CARD': {
      return deselectCard(state)
    }
    case 'FINISH_TURN': {
      return finishTurn(state)
    }
    default:
      return state
  }
}
