import { Dispatch } from 'react'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { Store } from '@/types'
import { reducer, Action } from './reducer'
import { defaultState } from './defaultState'
import { mockState } from '@/mocks'

export const store = configureStore({
  preloadedState: import.meta.env.VITE_MODE === 'dev' ? mockState : defaultState,
  reducer
})

export const useAppDispatch: () => Dispatch<Action> = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
