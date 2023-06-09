import { Button, Column } from '@/components/common'
import { mockCollectableAristocratState, mockInitialState } from '@/mocks'
import { loadStateAction } from '@/store/actions'
import { useAppDispatch } from '@/store/hooks'
import { Store } from '@/types'

interface PredefinedState {
  name: string
  mockState: () => Store
}

const predefinedState = (name: string, mockState: () => Store): PredefinedState => ({ name, mockState })

const PREDEFINED_STATES = [
  predefinedState('Initial state', mockInitialState),
  predefinedState('Collectable aristocrat', mockCollectableAristocratState)
]

export const PredefinedStates = () => {
  const dispatch = useAppDispatch()
  const loadState = (newState: Store) => dispatch(loadStateAction(newState))

  return (
    <Column gap="small" align="stretch">
      <span>Or pick predefined state:</span>
      <Column gap="tiny" align="stretch">
        {PREDEFINED_STATES.map(({ name, mockState }) => (
          <Button view="secondary" onClick={() => loadState(mockState())}>{name}</Button>
        ))}
      </Column>
    </Column>
  )
}
