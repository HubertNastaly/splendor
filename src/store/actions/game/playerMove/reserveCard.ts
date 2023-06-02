import { pickCardFromBoard, transfer } from '@/helpers';
import { CardData, Store } from '@/types';
import { clone } from '@/utils';
import { createAction } from '@reduxjs/toolkit';

export const reserveCardAction = createAction('RESERVE_CARD', (reservedCard: CardData) => ({ payload: { reservedCard }}))
export type ReserveCardAction = ReturnType<typeof reserveCardAction>

export function reserveCard(state: Store, { payload: { reservedCard }}: ReserveCardAction): Store {
  const { players, boardCardsByLevel, bank } = clone(state)
  const currentPlayer = players[state.currentPlayerIndex]

  if(currentPlayer.movePhase.type !== 'CARD_SELECTED') {
    throw new Error('No card selected')
  }

  currentPlayer.movePhase = { type: 'CARD_RESERVED' }
  currentPlayer.reservedCards.push(reservedCard)

  pickCardFromBoard(boardCardsByLevel, reservedCard)

  if(bank.gold > 0) {
    transfer(bank, currentPlayer.tokens, 'gold', 1)
  }

  return { ...state, players, boardCardsByLevel, bank }
}
