import { Color, Player } from "../types";

export function isToCollectDuplicatedThirdToken({ movePhase }: Player, tokenColor: Color) {
  return movePhase.type === '2_DIFFERENT_TOKENS_COLLECTED' && movePhase.tokenColors.includes(tokenColor)
}
