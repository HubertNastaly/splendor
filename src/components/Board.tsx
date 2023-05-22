import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'

export const Board = () => {
  const dispatch = useAppDispatch()
  const cardsByLevel = useAppSelector(({ boardCardsByLevel }) => boardCardsByLevel)

  useEffect(() => {
    dispatch({ type: 'GENERATE_BOARD' })
  }, [dispatch])

  return (
    <>{cardsByLevel[1].toString()}</>
  )
}
