import { Button, Column } from '@/components/common'
import { mockInitialState } from '@/mocks'
import { loadStateAction } from '@/store/actions'
import { useAppDispatch } from '@/store/hooks'
import { Store } from '@/types'

const PREDEFINED_STATES: { name: string, mockState: () => Store }[] = [
  { name: 'Initial state', mockState: mockInitialState }
]

export const PredefinedStates = () => {
  const dispatch = useAppDispatch()
  const loadState = (newState: Store) => dispatch(loadStateAction(newState))

  return (
    <Column gap="small" align="stretch">
      <span>Or pick predefined state:</span>
      <Column gap="tiny" align="stretch">
        {PREDEFINED_STATES.map(({ name, mockState }) => (
          <Button onClick={() => loadState(mockState())}>{name}</Button>
        ))}
      </Column>
    </Column>
  )
}
