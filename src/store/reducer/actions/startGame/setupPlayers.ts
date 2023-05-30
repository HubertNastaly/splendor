import { Player, Store } from '@/types';
import { createTokensCollection } from '@/utils';

export function setupPlayers(state: Store, playerNames: string[]): Store {
  const players: Player[] = playerNames.map(name => ({
    name,
    movePhase: { type: 'NONE' },
    tokens: createTokensCollection(),
    gold: 0,
    reservedCards: []
  }))

  return { ...state, players }
}
