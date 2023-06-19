import { MAX_RESERVED_CARDS_LIMIT } from '@/constants';
import { Player } from '@/types';

export function canReserveCard(player: Player) {
  return player.movePhase.type === 'CARD_SELECTED' && player.reservedCards.length < MAX_RESERVED_CARDS_LIMIT
}
