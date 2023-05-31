import { Player } from '@/types';

export function canPayToken(player: Player) {
  return player.movePhase.type === 'CARD_PURCHASE_STARTED'
}
