import { Player } from '@/types';
import { isOverTokensLimit } from './isOverTokensLimit';

export function canFinishTurn(player: Player) {
  switch(player.movePhase.type) {
    // TODO: handle rare case when player can pick only less tokens
    case 'ALL_TOKENS_COLLECTED':
    case 'CARD_RESERVED':
      return !isOverTokensLimit(player)
    case 'CARD_BOUGHT':
      return true
    default:
      return false
  }
}
