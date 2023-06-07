import { FaRedo, FaUndo } from 'react-icons/fa'
import { Button, Row } from './common'
import { useAppDispatch, useHistorySelector } from '@/store/hooks'
import { redoAction, undoAction } from '@/store/actions'

interface Props {
  className?: string
}

export const HistoryNavigation = ({ className }: Props) => {
  const { redoDisabled, undoDisabled } = useHistorySelector(({ past, future }) => ({
    undoDisabled: past.length === 0,
    redoDisabled: future.length === 0
  }))

  const dispatch = useAppDispatch()
  const undo = () => dispatch(undoAction())
  const redo = () => dispatch(redoAction())

  return (
    <Row className={className} gap="tiny">
      <Button onClick={undo} disabled={undoDisabled}>
        <FaUndo />
      </Button>
      <Button onClick={redo} disabled={redoDisabled}>
        <FaRedo />
      </Button>
    </Row>
  )
}
