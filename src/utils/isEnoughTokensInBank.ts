import { MIN_BANK_TOKENS_TO_PICK_TWO } from "../constants"
import { Color, Player, Tokens } from "../types"

export function isEnoughTokensInBank(bankTokens: Tokens, { movePhase }: Player, tokenColor: Color) {
  const bankTokensCount = bankTokens[tokenColor]
  if(bankTokensCount === 0) {
    return false
  }

  const isPickingTwoSameTokens = movePhase.type === '1_TOKEN_COLLECTED' && tokenColor === movePhase.tokenColor
  if(isPickingTwoSameTokens && bankTokensCount < MIN_BANK_TOKENS_TO_PICK_TWO - 1) { // -1 as one is already taken
    return false
  }

  return true
}
