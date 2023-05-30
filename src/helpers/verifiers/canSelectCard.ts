import { Player } from '@/types';

export function canSelectCard(player: Player) {
  switch(player.movePhase.type) {
    case 'NONE':
    case 'CARD_SELECTED':
      return true
    default:
      return false
  }
}
