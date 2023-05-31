import { useCurrentPlayer } from '@/hooks'
import { Button, Column } from './common'
import { useAppDispatch } from '@/store/hooks'
import { styled } from '@/theme'
import { canFinishTurn } from '@/helpers'

interface Props {
  className?: string
}

export const TurnPanel = ({ className }: Props) => {
  const dispatch = useAppDispatch()
  const currentPlayer = useCurrentPlayer()

  const finishTurn = () => dispatch({ type: 'FINISH_TURN' })

  return (
    <Container className={className}>
      <CurrentPlayer>Current player: {currentPlayer.name}</CurrentPlayer>
      <Button onClick={finishTurn} disabled={!canFinishTurn(currentPlayer)}>Finish turn</Button>
    </Container>
  )
}

const Container = styled(Column, {
  alignItems: 'stretch',
  rowGap: '$small',
  width: 256
})

const CurrentPlayer = styled('span')
