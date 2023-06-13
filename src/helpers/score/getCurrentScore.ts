import { Player } from '@/types'
import { calculateScore } from './calculateScore'
import { ENDING_GAME_SCORE } from '@/constants'
import { getAllPlayerCards } from '@/helpers/getAllPlayerCards'

export function getCurrentScore(players: Player[]) {
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
