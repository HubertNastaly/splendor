import { Player } from '@/types';
import { createTokensCollection } from './createTokensCollection';
import { createCardsByColorCollection } from '.';

export function createPlayer(name: string): Player {
  return {
    name,
    movePhase: { type: 'NONE' },
    tokens: createTokensCollection(),
    cards: createCardsByColorCollection(),
    reservedCards: [],
  }
}
