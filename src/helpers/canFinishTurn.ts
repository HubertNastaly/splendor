import { MAX_TOKENS_LIMIT } from '@/constants';
import { Player } from '@/types';
import { sum } from '@/utils';

export function canFinishTurn(player: Player) {
  switch(player.movePhase.type) {
    // TODO: handle rare case when player can pick only less tokens
    case '2_SAME_TOKENS_COLLECTED':
    case '3_TOKENS_COLLECTED':
    case 'CARD_RESERVED':
      return isInTokensLimit(player)
    default:
      return false
  }
}

function isInTokensLimit(player: Player) {
  return sum(Object.values(player.tokens)) + player.gold <= MAX_TOKENS_LIMIT
}
