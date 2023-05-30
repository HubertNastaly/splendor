import { Player } from '@/types'

export function canCollectToken(player: Player) {
  switch(player.movePhase.type) {
    case 'NONE':
    case '1_TOKEN_COLLECTED':
    case '2_DIFFERENT_TOKENS_COLLECTED':
      return true
    default:
      return false
  }
}
