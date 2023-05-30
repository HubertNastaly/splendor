import { CardData, Store } from '@/types';
import { clone } from '@/utils';
import { PayloadAction } from '@reduxjs/toolkit';

export type ReserveCardAction = PayloadAction<{ reservedCard: CardData }, 'RESERVE_CARD'>

export function reserveCard(state: Store, { payload: { reservedCard }}: ReserveCardAction): Store {
  const { players, boardCardsByLevel, bank } = clone(state)
  const currentPlayer = players[state.currentPlayerIndex]

  if(currentPlayer.movePhase.type !== 'CARD_SELECTED') {
    throw new Error('No card selected')
  }

  currentPlayer.movePhase = { type: 'CARD_RESERVED' }
  currentPlayer.reservedCards.push(reservedCard)

  const reservedCardIndex = boardCardsByLevel[reservedCard.level].findIndex(card => card ? card.id === reservedCard.id : false)
  boardCardsByLevel[reservedCard.level][reservedCardIndex] = null

  if(bank.gold > 0) {
    bank.gold--
    currentPlayer.tokens.gold++
  }

  return { ...state, players, boardCardsByLevel, bank }
}
