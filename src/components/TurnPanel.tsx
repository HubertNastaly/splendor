import { Button } from './Button'
import { useAppDispatch, useAppSelector } from '@/store'
import { styled } from '@/theme'

interface Props {
  className?: string
}

export const TurnPanel = ({ className }: Props) => {
  const { players, currentPlayerIndex } = useAppSelector(({ players, currentPlayerIndex }) => ({ players, currentPlayerIndex }))
  const dispatch = useAppDispatch()
  const currentPlayer = players[currentPlayerIndex]

  const finishTurn = () => dispatch({ type: 'FINISH_TURN' })

  return (
    <Container className={className}>
      <CurrentPlayer>Current player: {currentPlayer.name}</CurrentPlayer>
      <Button onClick={finishTurn}>Finish turn</Button>
    </Container>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$small',
  width: 256
})

const CurrentPlayer = styled('span')
