import { BasicColor, Player } from '@/types';

export function isToCollectDuplicatedThirdToken({ movePhase }: Player, tokenColor: BasicColor) {
  return movePhase.type === '2_DIFFERENT_TOKENS_COLLECTED' && movePhase.tokenColors.includes(tokenColor)
}
