import { Aristocrat, Player } from '@/types';
import { isOverTokensLimit } from './isOverTokensLimit';
import { isAristocratCollectable } from '.';

export function canFinishTurn(player: Player, aristocrats: Aristocrat[]) {
  switch(player.movePhase.type) {
    // TODO: handle rare case when player can pick only less tokens
    case 'ALL_TOKENS_COLLECTED':
    case 'CARD_RESERVED':
      return !isOverTokensLimit(player) && !isSomeAristocratCollectable(player, aristocrats)
    case 'CARD_BOUGHT':
      return !isSomeAristocratCollectable(player, aristocrats)
    case 'ARISTOCRAT_COLLECTED':
      return true
    default:
      return false
  }
}

const isSomeAristocratCollectable = (player: Player, aristocrats: Aristocrat[]) =>
  aristocrats.some(aristocrat => isAristocratCollectable(player, aristocrat))
