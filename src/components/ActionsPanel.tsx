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
    return <div/>
  }

  const { selectedCard } = movePhase

  const reserveCard = () => dispatch(reserveCardAction(selectedCard))
  const startPurchase = () => dispatch(startPurchaseAction(selectedCard))

  const reserveCardDisabled = reservedCards.some(card => card.id === selectedCard.card.id)
  
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

  '@lowResolution': {
    width: 160
  }
})
