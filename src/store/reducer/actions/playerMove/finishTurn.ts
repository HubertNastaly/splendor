import { Action } from "@reduxjs/toolkit";
import { Store } from "../../../../types";

export type FinishTurnAction = Action<'FINISH_TURN'>

export function finishTurn(state: Store): Store {
  const { currentPlayerIndex, players } = state
  players[currentPlayerIndex].movePhase = { type: 'NONE' }
  const nextPlayerIndex = (currentPlayerIndex + 1) % players.length

  return {
    ...state,
    currentPlayerIndex: nextPlayerIndex
  }
}
