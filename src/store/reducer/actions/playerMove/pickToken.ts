import { PayloadAction } from '@reduxjs/toolkit'
import { Color, Player, PlayerMovePhase, Store } from '@/types'
import { canCollectToken, clone, isEnoughTokensInBank, isToCollectDuplicatedThirdToken } from '@/utils'

export type PickTokenAction = PayloadAction<{ tokenColor: Color }, 'PICK_TOKEN'>

export function pickToken(state: Store, { payload: { tokenColor }}: PickTokenAction) {
  const newState = clone(state)
  const { currentPlayerIndex, players, bank } = newState
  const currentPlayer = players[currentPlayerIndex]

  if(!canCollectToken(currentPlayer)) {
    throw new Error('Not allowed to pick token in current phase')
  }

  if(!isEnoughTokensInBank(bank.tokens, currentPlayer, tokenColor)) {
    throw new Error('Not enough tokens in bank')
  }

  if(isToCollectDuplicatedThirdToken(currentPlayer, tokenColor)) {
    throw new Error('All three tokens must be different')
  }
  
  currentPlayer.tokens[tokenColor]++
  bank.tokens[tokenColor]--

  currentPlayer.movePhase = getNextMovePhase(currentPlayer, tokenColor)

  return newState
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
    default:
      throw new Error('Forbidden move phase achieved')
  }
}
