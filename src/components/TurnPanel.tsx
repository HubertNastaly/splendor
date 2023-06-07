import { useMemo } from 'react'
import { Button, Column, Row } from './common'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { styled } from '@/theme'
import { canFinishTurn } from '@/helpers'
import { finishTurnAction } from '@/store/actions'
import { Player } from '@/types'
import { sum } from '@/utils'
import { ARISTOCRAT_VALUE } from '@/constants'

interface Props {
  className?: string
}

export const TurnPanel = ({ className }: Props) => {
  const dispatch = useAppDispatch()
  const { players, currentPlayerIndex } = useAppSelector(({ players, currentPlayerIndex }) => ({ players, currentPlayerIndex }))
  const currentPlayer = players[currentPlayerIndex]

  const playersPoints = useMemo(() => players.map(calculatePlayersPoints), [players])

  const finishTurn = () => dispatch(finishTurnAction())

  return (
    <Container align="stretch" gap="none" className={className}>
      {players.map((player, index) => (
        <PlayerInfo
          key={`player-info-${index}`}
          justify="spaceBetween"
          currentPlayer={index === currentPlayerIndex}
        >
          <span>{player.name}</span>
          <span>{playersPoints[index]}</span>
        </PlayerInfo>
      ))}
      <FinishTurnButton onClick={finishTurn} disabled={!canFinishTurn(currentPlayer)}>
        Finish turn
      </FinishTurnButton>
    </Container>
  )
}

function calculatePlayersPoints({ cards, aristocrats }: Player) {
  const allCards = Object.values(cards).flat()
  const pointsFromCards = sum(allCards.map(({ value }) => value))
  const pointsFromAristocrats = aristocrats.length * ARISTOCRAT_VALUE

  return pointsFromCards + pointsFromAristocrats
}

const Container = styled(Column, {
  width: '100%'
})

const PlayerInfo = styled(Row, {
  padding: '$tiny',
  '@lowResolution': {
    fontSize: '$small'
  },

  variants: {
    currentPlayer: {
      true: {
        border: '1px solid black',
        borderRadius: 4
      }
    }
  }
})

const FinishTurnButton = styled(Button, {
  marginTop: '$tiny'
})
