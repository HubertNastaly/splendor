import { styled } from '@/theme'
import { Button, Column } from './common'
import { useAppDispatch } from '@/store/hooks'
import { useCurrentPlayer } from '@/hooks'
import { reserveCardAction, startPurchaseAction } from '@/store/actions'

interface Props {
  className?: string
}

export const ActionsPanel = ({ className }: Props) => {
  const dispatch = useAppDispatch()
  const { movePhase, reservedCards } = useCurrentPlayer()
  const shouldShowActionsPanel = movePhase.type === 'CARD_SELECTED'

  if(!shouldShowActionsPanel) {
    return <></>
  }

  const reserveCard = () => dispatch(reserveCardAction(movePhase.selectedCard))
  const startPurchase = () => dispatch(startPurchaseAction(movePhase.selectedCard))

  const reserveCardDisabled = reservedCards.some(card => card.id === movePhase.selectedCard.id)
  
  return (
    <Container className={className} gap="tiny">
      <Button onClick={reserveCard} disabled={reserveCardDisabled}>Reserve card</Button>
      <Button onClick={startPurchase}>Buy card</Button>
    </Container>
  )
}

const Container = styled(Column, {
  alignItems: 'stretch',
  width: 256,
})
