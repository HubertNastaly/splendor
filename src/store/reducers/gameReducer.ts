import { Store } from '@/types';
import {
  GameAction,
  cancelPurchase,
  collectAristocrat,
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
} from '@/store/actions';

export function gameReducer (state: Store, action: GameAction): Store {
  switch(action.type) {
    case 'START_GAME': {
      return startGame(action)
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
    case 'COLLECT_ARISTOCRAT': {
      return collectAristocrat(state, action)
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
