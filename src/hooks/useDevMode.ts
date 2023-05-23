import { useEffect } from "react"
import { useAppDispatch } from "../store"

const DEFAULT_NAMES: string[] = ['Szymon', 'Daniel', 'Ignacy']

export function useDevMode() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const shouldUseDevMode = import.meta.env.VITE_MODE === 'dev'
    if(shouldUseDevMode) {
      dispatch({ type: 'START_GAME', payload: { names: DEFAULT_NAMES } })
    }
  }, [dispatch])
}
