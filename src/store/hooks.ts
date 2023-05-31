import { Dispatch } from 'react'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { Action } from './reducer'
import { Store } from '@/types'

export const useAppDispatch: () => Dispatch<Action> = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
