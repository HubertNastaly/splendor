import { configureStore } from '@reduxjs/toolkit'
import { getDefaultState } from './defaultState'
import { History, Store } from '@/types'
import { Action } from './actions'
import { mainReducer } from './mainReducer'

export const store = configureStore<History<Store>, Action>({
  preloadedState: {
    past: [],
    present: { state: getDefaultState() },
    future: []
  },
  reducer: mainReducer,
})
