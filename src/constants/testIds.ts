import { Color } from '@/types';

export const testIds = {
  bank: 'bank',
  boardAristocrats: 'board-aristocrats',
  boardCards: 'board-cards',
  currentPlayerInfo: 'current-player-info',
  playerInfo: (name: string) => `player-info-${name}`,
  aristocrat: (aristocratId: number) => `aristocrat-${aristocratId}`,
  card: (cardId: number) => `card-${cardId}`,
  token: (color: Color) => `token-${color}`,
  tokenCounter: (color: Color) => `token-counter-${color}`,
  playerNameInput: 'player-name-input',
  pile: (color: Color) => `pile-${color}`,
  playerPanel: 'player-panel',
  aristocratsIndicator: 'aristocrats-indicator',
  aristocratsPoints: 'aristocrats-points'
} as const
