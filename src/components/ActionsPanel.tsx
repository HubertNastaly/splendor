import { styled } from '@/theme'
import { Button, Column } from './common'
import { useAppSelector } from '@/store'

interface Props {
  className?: string
}

export const ActionsPanel = ({ className }: Props) => {
  const { currentPlayer } = useAppSelector(({ players, currentPlayerIndex }) => ({
    currentPlayer: players[currentPlayerIndex]
  }))
  const shouldShowActionsPanel = currentPlayer.movePhase.type === 'CARD_SELECTED'

  if(!shouldShowActionsPanel) {
    return <></>
  }
  
  return (
    <Container className={className} gap="tiny">
      <Button>Reserve card</Button>
      <Button>Buy card</Button>
    </Container>
  )
}

const Container = styled(Column, {
  alignItems: 'stretch',
  width: 256,
})
