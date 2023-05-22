import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { Store } from '../types'
import { DeckAction, decksReducer } from './reducers'
import { DEFAULT_STATE } from './defaultState'
import { Dispatch } from 'react'

export type Action = DeckAction

export const store = configureStore<Store, Action>({
  preloadedState: DEFAULT_STATE,
  reducer: decksReducer
})

export const useAppDispatch: () => Dispatch<Action> = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
