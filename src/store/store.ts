import { Dispatch } from 'react'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { getDefaultState } from './defaultState'
import { mockState } from '@/mocks'

export const store = configureStore({
  preloadedState: import.meta.env.VITE_MODE === 'dev' ? mockState() : getDefaultState(),
  reducer
})

export const useAppDispatch: () => Dispatch<Action> = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
