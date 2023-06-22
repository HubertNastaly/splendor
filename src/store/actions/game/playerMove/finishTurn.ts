import { createAction } from '@reduxjs/toolkit';
import { CARD_LEVELS, CardLevel, GameState, NullableCardsByLevel, Player, Store } from '@/types';
import { clone } from '@/utils';
import { calculateScore } from '@/helpers';
import { ENDING_GAME_SCORE } from '@/constants';

export const finishTurnAction = createAction('FINISH_TURN')
export type FinishTurnAction = ReturnType<typeof finishTurnAction>

export function finishTurn(state: Store): Store {
  const { currentPlayerIndex } = state
  const players = clone(state.players)

  const currentPlayer = players[currentPlayerIndex]
  currentPlayer.movePhase = { type: 'NONE' }

  const gameState = getGameState(state.gameState, currentPlayer, currentPlayerIndex, players.length)

  return {
    ...state,
    gameState,
    ...fillBoard(state),
    players,
    currentPlayerIndex: (currentPlayerIndex + 1) % players.length,
  }
}

function fillBoard({ boardCardsByLevel, decksByLevel }: Store): Pick<Store, 'boardCardsByLevel' | 'decksByLevel'> {
  const emptyPlace = findEmptyPlace(boardCardsByLevel)
  if(!emptyPlace) {
    return {
      boardCardsByLevel,
      decksByLevel
    }
  }

  const boardCards= clone(boardCardsByLevel)
  const decks = clone(decksByLevel)

  const [level, index] = emptyPlace
  const newCard = decks[level].pop()
  if(newCard) {
    boardCards[level][index] = newCard
  }

  return {
    boardCardsByLevel: boardCards,
    decksByLevel: decks
  }
}

function findEmptyPlace(boardCards: NullableCardsByLevel): [CardLevel, number] | undefined {
  for(const level of CARD_LEVELS) {
    const cards = boardCards[level]

    for(let i=0; i<cards.length; i++) {
      if(cards[i] === null) {
        return [level, i]
      }
    }
  }
}

function getGameState(currentGameState: GameState, currentPlayer: Player, currentPlayerIndex: number, playersNumber: number): GameState {
  switch(currentGameState) {
    case 'started': {
      const pointsThresholdReached = calculateScore(currentPlayer) >= ENDING_GAME_SCORE
      return pointsThresholdReached ? 'lastRound' : currentGameState
    }
    case 'lastRound': {
      const isLastPlayer = currentPlayerIndex === playersNumber - 1
      return isLastPlayer ? 'ended' : currentGameState
    }
    default:
      return currentGameState
  }
}
