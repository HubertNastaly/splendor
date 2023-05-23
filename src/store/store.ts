import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { Store } from '../types'
import { SetupAction, setupReducer } from './reducers'
import { DEFAULT_STATE } from './defaultState'
import { Dispatch } from 'react'

export type Action = SetupAction

export const store = configureStore<Store, Action>({
  preloadedState: DEFAULT_STATE,
  reducer: setupReducer
})

export const useAppDispatch: () => Dispatch<Action> = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
