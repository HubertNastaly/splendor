import { Player } from '@/types';
import { createTokensCollection } from './createTokensCollection';

export function createPlayer(name: string): Player {
  return {
    name,
    movePhase: { type: 'NONE' },
    tokens: createTokensCollection(),
    reservedCards: []
  }
}
