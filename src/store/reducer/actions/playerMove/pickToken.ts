import { PayloadAction } from "@reduxjs/toolkit";
import { MIN_BANK_TOKENS_TO_PICK_TWO } from "../../../../constants";
import { Color, Player, PlayerMovePhase, Store, Tokens } from "../../../../types";
import { clone } from "../../../../utils/clone";

export type PickTokenAction = PayloadAction<{ tokenColor: Color }, 'PICK_TOKEN'>

export function pickToken(state: Store, { payload: { tokenColor }}: PickTokenAction) {
  const { currentPlayerIndex } = state
  const players = [...state.players]
  const currentPlayer = clone(players[currentPlayerIndex])
  const bankTokens: Tokens = { ...state.bankTokens }

  if(!isEnoughTokensInBank(bankTokens, currentPlayer, tokenColor)) {
    throw new Error('Not enough tokens in bank')
  }
  
  currentPlayer.tokens[tokenColor]++
  bankTokens[tokenColor]--

  currentPlayer.movePhase = getNextMovePhase(currentPlayer, tokenColor)

  players[currentPlayerIndex] = currentPlayer

  return {
    ...state,
    players,
    bankTokens
  }
}

function isEnoughTokensInBank(bankTokens: Tokens, { movePhase }: Player, tokenColor: Color) {
  const bankTokensCount = bankTokens[tokenColor]
  if(bankTokensCount === 0) {
    return false
  }

  const isPickingTwoSameTokens = movePhase.type === '1_TOKEN_COLLECTED' && tokenColor === movePhase.tokenColor
  if(isPickingTwoSameTokens && bankTokensCount < MIN_BANK_TOKENS_TO_PICK_TWO) {
    return false
  }

  return true
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
