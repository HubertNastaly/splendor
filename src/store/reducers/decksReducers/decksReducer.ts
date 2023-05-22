import { Store } from "../../../types";
import { DEFAULT_STATE } from "../../defaultState";
import { GenerateBoardAction, generateBoard } from "./actions/generateBoard";

export type DeckAction = GenerateBoardAction

export function decksReducer (state: Store = DEFAULT_STATE, action: DeckAction) {
  switch(action.type) {
    case 'GENERATE_BOARD': {
      const newState = generateBoard(state)
      return newState
    }
    default:
      return state
  }
}
