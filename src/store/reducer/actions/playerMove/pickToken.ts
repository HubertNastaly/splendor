import { PayloadAction } from '@reduxjs/toolkit'
import { Color, Player, PlayerMovePhase, Store } from '@/types'
import { clone, isEnoughTokensInBank, isToCollectDuplicatedThirdToken } from '@/utils'
import { Bank } from '@/types/bank'

export type PickTokenAction = PayloadAction<{ tokenColor: Color }, 'PICK_TOKEN'>

export function pickToken(state: Store, { payload: { tokenColor }}: PickTokenAction) {
  const { currentPlayerIndex } = state
  const players = [...state.players]
  const currentPlayer = clone(players[currentPlayerIndex])
  const bank: Bank = { ...state.bank }

  if(!isEnoughTokensInBank(bank.tokens, currentPlayer, tokenColor)) {
    throw new Error('Not enough tokens in bank')
  }

  if(isToCollectDuplicatedThirdToken(currentPlayer, tokenColor)) {
    throw new Error('All three tokens must be different')
  }
  
  currentPlayer.tokens[tokenColor]++
  bank.tokens[tokenColor]--

  currentPlayer.movePhase = getNextMovePhase(currentPlayer, tokenColor)

  players[currentPlayerIndex] = currentPlayer

  return {
    ...state,
    players,
    bank
  }
}

function getNextMovePhase({ movePhase }: Player, tokenColor: Color): PlayerMovePhase {
  switch(movePhase.type) {
    case 'NONE':
      return { type: '1_TOKEN_COLLECTED', tokenColor }
    case '1_TOKEN_COLLECTED':
      if(movePhase.tokenColor === tokenColor) {
        return { type: '2_SAME_TOKENS_COLLECTED', tokenColor }
      } else {
        return { type: '2_DIFFERENT_TOKENS_COLLECTED', tokenColors: [movePhase.tokenColor, tokenColor] }
      }
    case '2_DIFFERENT_TOKENS_COLLECTED':
      return { type: '3_TOKENS_COLLECTED', tokenColors: [...movePhase.tokenColors, tokenColor] }
    case '2_SAME_TOKENS_COLLECTED':
    case '3_TOKENS_COLLECTED':
    default:
      throw new Error('Forbidden move phase achieved')
  }
}
