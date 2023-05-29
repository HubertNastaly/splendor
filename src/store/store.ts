import { Dispatch } from 'react'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { Store } from '@/types'
import { reducer, Action } from './reducer'
import { DEFAULT_STATE } from './defaultState'


export const store = configureStore({
  preloadedState: DEFAULT_STATE,
  reducer
})

export const useAppDispatch: () => Dispatch<Action> = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
