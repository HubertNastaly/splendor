import { Store } from "../../../types";
import { DEFAULT_STATE } from "../../defaultState";
import { startGame, StartGameAction } from "./actions/startGame";

export type SetupAction = StartGameAction

export function setupReducer (state: Store = DEFAULT_STATE, action: SetupAction) {
  switch(action.type) {
    case 'START_GAME': {
      return startGame(state, action)
    }
    default:
      return state
  }
}
