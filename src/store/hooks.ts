import { Dispatch } from 'react'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { Action } from './actions'
import { Store, History } from '@/types'

export const useAppDispatch: () => Dispatch<Action> = useDispatch

export const useHistorySelector: TypedUseSelectorHook<History<Store>> = useSelector
export const useAppSelector = <T>(selector: (store: Store) => T) => {
  return useHistorySelector(({ present }) => selector(present))
}
