import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'
import { getDefaultState } from './defaultState'
import { mockState } from '@/mocks'

export const store = configureStore({
  preloadedState: import.meta.env.VITE_MODE === 'dev' ? mockState() : getDefaultState(),
  reducer
})
