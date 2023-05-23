import { Store } from "../../types";
import { DEFAULT_STATE } from "../defaultState";
import { Action, finishTurn } from "./actions";
import { startGame } from "./actions/startGame";

export function reducer (state: Store = DEFAULT_STATE, action: Action): Store {
  switch(action.type) {
    case 'START_GAME': {
      return startGame(state, action)
    }
    case 'FINISH_TURN': {
      return finishTurn(state)
    }
    default:
      return state
  }
}
