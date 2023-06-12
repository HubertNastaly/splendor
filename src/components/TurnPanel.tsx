import { useMemo } from 'react'
import { Button, Column, Row } from './common'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { styled } from '@/theme'
import { calculateScore, canFinishTurn, getAllPlayerCards } from '@/helpers'
import { finishTurnAction } from '@/store/actions'
import { ENDING_GAME_SCORE } from '@/constants'
import { Player } from '@/types'

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

  const { playersPoints, currentWinnerIndex } = useMemo(() => getCurrentScore(players), [players])

  const finishTurn = () => dispatch(finishTurnAction())
  const isFinishTurnDisabled = !canFinishTurn(currentPlayer, aristocrats)

  return (
    <Container align="stretch" gap="none" className={className}>
      {players.map((player, index) => (
        <PlayerInfo
          key={`player-info-${index}`}
          justify="spaceBetween"
          currentPlayer={index === currentPlayerIndex}
          currentWinner={index === currentWinnerIndex}
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

function getCurrentScore(players: Player[]) {
  const playersPoints = players.map(calculateScore)
  const currentWinnerIndex = getCurrentWinnerIndex(playersPoints, players)

  return { playersPoints, currentWinnerIndex }
}

function getCurrentWinnerIndex(playersPoints: number[], players: Player[]) {
  const maxScore = Math.max(...playersPoints)
  if(maxScore < ENDING_GAME_SCORE) {
    return null
  }

  const currentWinnerIndex = players.reduce<number>((winnerIndex, currentPlayer, currentPlayerIndex) => {
    const currentWinner = players[winnerIndex]
    const winnerPoints = playersPoints[winnerIndex]
    const playerPoints = playersPoints[currentPlayerIndex]

    const shouldUpdateWinner = isNewWinner(currentWinner, currentPlayer, winnerPoints, playerPoints)
    return shouldUpdateWinner ? currentPlayerIndex : winnerIndex
  }, 0)

  return currentWinnerIndex
}

function isNewWinner(currentWinner: Player, currentPlayer: Player, winnerPoints: number, playerPoints: number) {
  if(playerPoints < winnerPoints) {
    return false
  }

  if(winnerPoints < playerPoints) {
    return true
  }

  return getAllPlayerCards(currentPlayer.cards).length > getAllPlayerCards(currentWinner.cards).length
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
