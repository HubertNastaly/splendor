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

  const aristocratIndex = aristocrats.findIndex(maybeAristocrat => (
    maybeAristocrat && maybeAristocrat.id === pickedAristocrat.id
  ))

  if(aristocratIndex === -1) {
    throw new Error('Picked aristocrat does not exist')
  }

  aristocrats.splice(aristocratIndex, 1)
  players[state.currentPlayerIndex].aristocrats.push(pickedAristocrat)

  return { ...state, players, aristocrats }
}
