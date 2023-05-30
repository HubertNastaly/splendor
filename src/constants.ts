import { PlayerMovePhase } from './types'

export const MIN_PLAYERS_NUMBER = 2
export const MAX_PLAYERS_NUMBER = 4
export const CARDS_PER_LEVEL = 4
export const MIN_BANK_TOKENS_TO_PICK_TWO = 4

export const ALLOWED_COLLECTING_PHASES: PlayerMovePhase['type'][] = [
  'NONE',
  '1_TOKEN_COLLECTED',
  '2_DIFFERENT_TOKENS_COLLECTED'
]
