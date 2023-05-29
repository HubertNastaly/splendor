import { Action } from "@reduxjs/toolkit";
import { Player, Store } from "../../../../types";

export type FinishTurnAction = Action<'FINISH_TURN'>

export function finishTurn(state: Store): Store {
  const { currentPlayerIndex } = state

  const players = [...state.players]
  const currentPlayer: Player = {
    ...players[currentPlayerIndex],
    movePhase: {
      type: 'NONE'
    }
  }
  players[currentPlayerIndex] = currentPlayer

  const nextPlayerIndex = (state.currentPlayerIndex + 1) % players.length

  return {
    ...state,
    players,
    currentPlayerIndex: nextPlayerIndex
  }
}
