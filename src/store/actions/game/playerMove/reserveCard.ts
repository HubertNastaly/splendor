import { canReserveCard, pickCardFromBoard, transfer } from '@/helpers';
import { SelectedCard, Store } from '@/types';
import { clone } from '@/utils';
import { createAction } from '@reduxjs/toolkit';

export const reserveCardAction = createAction('RESERVE_CARD', (reservedCard: SelectedCard) => ({ payload: { reservedCard } }))
export type ReserveCardAction = ReturnType<typeof reserveCardAction>

export function reserveCard(state: Store, { payload: { reservedCard }}: ReserveCardAction): Store {
  const { players, boardCardsByLevel, bank } = clone(state)
  const currentPlayer = players[state.currentPlayerIndex]

  if(!canReserveCard(currentPlayer)) {
    throw new Error('No card selected')
  }

  currentPlayer.movePhase = { type: 'CARD_RESERVED' }
  currentPlayer.reservedCards.push(reservedCard.card)

  pickCardFromBoard(boardCardsByLevel, reservedCard.card)

  if(bank.gold > 0) {
    transfer(bank, currentPlayer.tokens, 'gold', 1)
  }

  return { ...state, players, boardCardsByLevel, bank }
}
