import { Store } from "../../types";
import { DEFAULT_STATE } from "../defaultState";
import { Action, finishTurn, pickToken } from "./actions";
import { startGame } from "./actions/startGame";

export function reducer (state: Store = DEFAULT_STATE, action: Action): Store {
  switch(action.type) {
    case 'START_GAME': {
      return startGame(state, action)
    }
    case 'PICK_TOKEN': {
      return pickToken(state, action)
    }
    case 'FINISH_TURN': {
      return finishTurn(state)
    }
    default:
      return state
  }
}
