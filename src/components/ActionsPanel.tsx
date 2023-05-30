import { styled } from '@/theme'
import { Button, Column } from './common'
import { useAppDispatch, useAppSelector } from '@/store'

interface Props {
  className?: string
}

export const ActionsPanel = ({ className }: Props) => {
  const dispatch = useAppDispatch()
  const { currentPlayer: { movePhase } } = useAppSelector(({ players, currentPlayerIndex }) => ({
    currentPlayer: players[currentPlayerIndex]
  }))
  const shouldShowActionsPanel = movePhase.type === 'CARD_SELECTED'

  if(!shouldShowActionsPanel) {
    return <></>
  }

  const reserveCard = () => dispatch({ type: 'RESERVE_CARD', payload: { reservedCard: movePhase.selectedCard } })
  
  return (
    <Container className={className} gap="tiny">
      <Button onClick={reserveCard}>Reserve card</Button>
      <Button>Buy card</Button>
    </Container>
  )
}

const Container = styled(Column, {
  alignItems: 'stretch',
  width: 256,
})
