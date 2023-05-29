import { CardData, Store } from '@/types';
import { PayloadAction } from '@reduxjs/toolkit';

export type SelectCardAction = PayloadAction<{ selectedCard: CardData }, 'SELECT_CARD'>

export function selectCard(state: Store, { payload: { selectedCard } }: SelectCardAction): Store {
  return {
    ...state,
    selectedCard
  }
}
