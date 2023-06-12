import { canCollectAristocrat } from '@/helpers/verifiers';
import { Aristocrat, Store } from '@/types';
import { clone } from '@/utils';
import { createAction } from '@reduxjs/toolkit';

export const collectAristocratAction = createAction(
  'COLLECT_ARISTOCRAT',
  (pickedAristocrat: Aristocrat) => ({ payload: { pickedAristocrat } })
)

export type CollectAristocratAction = ReturnType<typeof collectAristocratAction>

export function collectAristocrat(state: Store, { payload: { pickedAristocrat }}: CollectAristocratAction): Store {
  const aristocrats = clone(state.aristocrats)
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]

  if(!canCollectAristocrat(currentPlayer)) {
    throw new Error('Cannot collect aristocrat in current move phase')
  }

  const aristocratIndex = aristocrats.findIndex(maybeAristocrat => (
    maybeAristocrat && maybeAristocrat.id === pickedAristocrat.id
  ))

  if(aristocratIndex === -1) {
    throw new Error('Picked aristocrat does not exist')
  }


  aristocrats.splice(aristocratIndex, 1)
  currentPlayer.aristocrats.push(pickedAristocrat)
  currentPlayer.movePhase = { type: 'ARISTOCRAT_COLLECTED' }

  return { ...state, players, aristocrats }
}
