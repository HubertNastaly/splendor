import { FaRedo, FaUndo } from "react-icons/fa"
import { Button, Row } from "./common"
import { useAppDispatch, useHistorySelector } from "@/store/hooks"
import { undoAction } from "@/store/actions"

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

  return (
    <Row className={className}>
      <Button onClick={undo} disabled={undoDisabled}>
        <FaUndo />
      </Button>
      <Button onClick={() => null} disabled={redoDisabled}>
        <FaRedo />
      </Button>
    </Row>
  )
}
