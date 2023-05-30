import { Player, Store } from '@/types';
import { createTokensCollection } from '@/helpers';

export function setupPlayers(state: Store, playerNames: string[]): Store {
  const players: Player[] = playerNames.map(name => ({
    name,
    movePhase: { type: 'NONE' },
    tokens: createTokensCollection(),
    reservedCards: []
  }))

  return { ...state, players }
}
