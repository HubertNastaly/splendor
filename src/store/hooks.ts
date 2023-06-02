import { Dispatch } from 'react'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { GameAction } from './actions'
import { Store } from '@/types'

export const useAppDispatch: () => Dispatch<GameAction> = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
