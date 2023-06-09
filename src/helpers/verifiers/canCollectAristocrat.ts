import { Player } from '@/types';

export function canCollectAristocrat(player: Player) {
  switch(player.movePhase.type) {
    case 'ALL_TOKENS_COLLECTED':
    case 'CARD_BOUGHT':
    case 'CARD_RESERVED':
      return true
    default:
      return false
  }
}
