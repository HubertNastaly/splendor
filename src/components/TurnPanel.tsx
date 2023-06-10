import { useMemo } from 'react'
import { Button, Column, Row } from './common'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { styled } from '@/theme'
import { canFinishTurn } from '@/helpers'
import { finishTurnAction } from '@/store/actions'
import { Player } from '@/types'
import { sum } from '@/utils'
import { ARISTOCRAT_VALUE, ENDING_GAME_SCORE } from '@/constants'

interface Props {
  className?: string
}

export const TurnPanel = ({ className }: Props) => {
  const dispatch = useAppDispatch()
  const { players, aristocrats, currentPlayerIndex } = useAppSelector(({ players, currentPlayerIndex, aristocrats }) => ({
    players,
    aristocrats,
    currentPlayerIndex
  }))
  const currentPlayer = players[currentPlayerIndex]

  const playersPoints = useMemo(() => players.map(calculatePlayersPoints), [players])
  const currentWinnersIndices = getCurrentWinnersIndices(playersPoints)

  const finishTurn = () => dispatch(finishTurnAction())
  const isFinishTurnDisabled = !canFinishTurn(currentPlayer, aristocrats)

  return (
    <Container align="stretch" gap="none" className={className}>
      {players.map((player, index) => (
        <PlayerInfo
          key={`player-info-${index}`}
          justify="spaceBetween"
          currentPlayer={index === currentPlayerIndex}
          currentWinner={currentWinnersIndices.includes(index)}
        >
          <span>{player.name}</span>
          <span>{playersPoints[index]}</span>
        </PlayerInfo>
      ))}
      <FinishTurnButton onClick={finishTurn} disabled={isFinishTurnDisabled}>
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

function getCurrentWinnersIndices(playersPoints: number[]) {
  const maxScore = Math.max(...playersPoints)
  if(maxScore < ENDING_GAME_SCORE) {
    return []
  }

  const currentWinnersIndices = [...new Array(playersPoints.length)]
    .map((_, index) => index)
    .filter(index => playersPoints[index] === maxScore)

  return currentWinnersIndices
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
    },
    currentWinner: {
      true: {
        color: '$pink'
      }
    }
  }
})

const FinishTurnButton = styled(Button, {
  marginTop: '$tiny'
})
