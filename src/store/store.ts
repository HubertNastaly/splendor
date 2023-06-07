import { configureStore } from '@reduxjs/toolkit'
import { getDefaultState } from './defaultState'
import { mockInitialState } from '@/mocks'
import { History, Store } from '@/types'
import { Action } from './actions'
import { mainReducer } from './mainReducer'

export const store = configureStore<History<Store>, Action>({
  preloadedState: {
    past: [],
    present: { state: import.meta.env.VITE_MODE === 'dev' ? mockInitialState() : getDefaultState() },
    future: []
  },
  reducer: mainReducer
})
