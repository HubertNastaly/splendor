import { configureStore } from '@reduxjs/toolkit'
import { gameReducer, undoableReducer } from './reducers'
import { getDefaultState } from './defaultState'
import { mockState } from '@/mocks'
import { History, Store } from '@/types'
import { Action } from './actions'

export const store = configureStore<History<Store>, Action>({
  preloadedState: {
    past: [],
    present: import.meta.env.VITE_MODE === 'dev' ? mockState() : getDefaultState(),
    future: []
  },
  reducer: undoableReducer<Store, Action>(gameReducer)
})
