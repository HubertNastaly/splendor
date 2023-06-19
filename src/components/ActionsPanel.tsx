import { styled } from '@/theme'
import { useAppDispatch } from '@/store/hooks'
import { useCurrentPlayer } from '@/hooks'
import { reserveCardAction, startPurchaseAction } from '@/store/actions'
import { canReserveCard } from '@/helpers'
import { Button, Column } from './common'

interface Props {
  className?: string
}

export const ActionsPanel = ({ className }: Props) => {
  const dispatch = useAppDispatch()
  const currentPlayer = useCurrentPlayer()
  const { movePhase } = currentPlayer
  const shouldShowActionsPanel = movePhase.type === 'CARD_SELECTED'

  if(!shouldShowActionsPanel) {
    return <></>
  }

  const { selectedCard } = movePhase

  const reserveCard = () => dispatch(reserveCardAction(selectedCard))
  const startPurchase = () => dispatch(startPurchaseAction(selectedCard))

  const isReservedCardSelected = currentPlayer.reservedCards.some(card => card.id === selectedCard.card.id)
  const reserveCardDisabled = isReservedCardSelected || !canReserveCard(currentPlayer)
  
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
