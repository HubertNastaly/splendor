import { Store } from '@/types';
import { createCardsCollection, createTokensCollection } from '@/helpers';

export const defaultState: Store = {
  decksByLevel: createCardsCollection(),
  boardCardsByLevel: createCardsCollection(),
  bank: createTokensCollection(),
  gameState: 'setup',
  players: [],
  currentPlayerIndex: 0
}
