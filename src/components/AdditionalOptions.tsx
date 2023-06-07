import { FaRedo, FaScroll, FaUndo } from 'react-icons/fa'
import { Button, LinkButton, Row } from './common'
import { useAppDispatch, useHistorySelector } from '@/store/hooks'
import { redoAction, undoAction } from '@/store/actions'
import { styled } from '@/theme'

const GAME_RULES_URL = 'https://files.rebel.pl/files/instrukcje/Instrukcja_Splendor(2019).pdf'

interface Props {
  className?: string
}

export const AdditionalOptions = ({ className }: Props) => {
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
      <RulesButton link={GAME_RULES_URL}>
        <FaScroll />
      </RulesButton>
    </Row>
  )
}

const RulesButton = styled(LinkButton, {
  flex: 1
})
