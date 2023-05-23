import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { Store } from '../types'
import { reducer } from './reducer'
import { DEFAULT_STATE } from './defaultState'
import { Dispatch } from 'react'
import { Action } from './reducer/actions'


export const store = configureStore({
  preloadedState: DEFAULT_STATE,
  reducer
})

export const useAppDispatch: () => Dispatch<Action> = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
