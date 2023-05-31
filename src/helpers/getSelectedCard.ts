import { Player } from '@/types';

export function getSelectedCard(player: Player) {
  const { movePhase } = player
  return movePhase.type === 'CARD_SELECTED' || movePhase.type === 'CARD_PURCHASE_STARTED' ? movePhase.selectedCard : null
}
