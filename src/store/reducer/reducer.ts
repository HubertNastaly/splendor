import { Store } from '@/types';
import {
  Action,
  cancelPurchase,
  deselectCard,
  finalizePurchase,
  finishTurn,
  payToken,
  pickToken,
  reserveCard,
  returnToken,
  selectCard,
  startGame,
  startPurchase
} from './actions';
import { getDefaultState } from '@/store/defaultState';

export function reducer (state: Store = getDefaultState(), action: Action): Store {
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
    case 'RESERVE_CARD': {
      return reserveCard(state, action)
    }
    case 'START_PURCHASE': {
      return startPurchase(state, action)
    }
    case 'PAY_TOKEN': {
      return payToken(state, action)
    }
    case 'CANCEL_PURCHASE': {
      return cancelPurchase(state)
    }
    case 'FINALIZE_PURCHASE': {
      return finalizePurchase(state)
    }
    case 'RETURN_TOKEN': {
      return returnToken(state, action)
    }
    case 'FINISH_TURN': {
      return finishTurn(state)
    }
    default:
      return state
  }
}
