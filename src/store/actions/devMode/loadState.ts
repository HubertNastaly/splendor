import { Store } from '@/types';
import { createAction } from '@reduxjs/toolkit';

export const loadStateAction = createAction('LOAD_STATE', (newState: Store) => ({ payload: { newState } }))
export type LoadStateAction = ReturnType<typeof loadStateAction>

export function loadState({ payload: { newState }}: LoadStateAction): Store {
  return newState
}
