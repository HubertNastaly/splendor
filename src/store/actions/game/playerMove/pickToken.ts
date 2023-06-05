import { createAction } from '@reduxjs/toolkit'
import { BasicColor, Player, PlayerMovePhase, Store } from '@/types'
import { clone } from '@/utils'
import { canCollectToken, isEnoughTokensInBank, isToCollectDuplicatedThirdToken, transfer } from '@/helpers'

export const pickTokenAction = createAction('PICK_TOKEN', (tokenColor: BasicColor) => ({ payload: { tokenColor }}))
export type PickTokenAction = ReturnType<typeof pickTokenAction>

export function pickToken(state: Store, { payload: { tokenColor }}: PickTokenAction): Store {
  const players = clone(state.players)
  const bank = clone(state.bank)
  const currentPlayer = players[state.currentPlayerIndex]

  if(!canCollectToken(currentPlayer)) {
    throw new Error('Not allowed to pick token in current phase')
  }

  if(!isEnoughTokensInBank(bank, currentPlayer, tokenColor)) {
    throw new Error('Not enough tokens in bank')
  }

  if(isToCollectDuplicatedThirdToken(currentPlayer, tokenColor)) {
    throw new Error('All three tokens must be different')
  }
  
  transfer(bank, currentPlayer.tokens, tokenColor, 1)
  currentPlayer.movePhase = getNextMovePhase(currentPlayer, tokenColor)

  return {
    ...state,
    players,
    bank
  }
}

function getNextMovePhase({ movePhase }: Player, tokenColor: BasicColor): PlayerMovePhase {
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
