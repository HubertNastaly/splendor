import { Action } from '@reduxjs/toolkit';
import { CARD_LEVELS, CardLevel, NullableCardsByLevel, Store } from '@/types';
import { clone } from '@/utils';

export type FinishTurnAction = Action<'FINISH_TURN'>

export function finishTurn(state: Store): Store {
  const { currentPlayerIndex } = state
  const players = clone(state.players)

  const currentPlayer = players[currentPlayerIndex]
  currentPlayer.movePhase = { type: 'NONE' }

  const nextPlayerIndex = (currentPlayerIndex + 1) % players.length

  return {
    ...state,
    ...fillBoard(state),
    players,
    currentPlayerIndex: nextPlayerIndex,
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
