import { isCardPriceFulfilled, pickCardFromBoard, transfer } from '@/helpers';
import { Store, TOKEN_COLORS } from '@/types';
import { clone } from '@/utils';
import { createAction } from '@reduxjs/toolkit';

export const finalizePurchaseAction = createAction('FINALIZE_PURCHASE')
export type FinalizePurchaseAction = ReturnType<typeof finalizePurchaseAction>

export function finalizePurchase(state: Store): Store {
  const bank = clone(state.bank)
  const boardCardsByLevel = clone(state.boardCardsByLevel)
  const purchaseTokens = clone(state.purchaseTokens)
  const players = clone(state.players)
  const currentPlayer = players[state.currentPlayerIndex]
  const { movePhase } = currentPlayer

  if(movePhase.type !== 'CARD_PURCHASE_STARTED') {
    throw new Error('Cannot buy card in current phase')
  }

  const { selectedCard } = movePhase

  if(!isCardPriceFulfilled(currentPlayer.cards, purchaseTokens, selectedCard.price)) {
    throw new Error('Price is not fulfilled')
  }

  for(const tokenColor of TOKEN_COLORS) {
    transfer(purchaseTokens, bank, tokenColor, purchaseTokens[tokenColor])
  }

  pickCardFromBoard(boardCardsByLevel, selectedCard)
  currentPlayer.cards[selectedCard.color].push(selectedCard)

  currentPlayer.movePhase = { type: 'CARD_BOUGHT' }

  return {
    ...state,
    bank,
    boardCardsByLevel,
    purchaseTokens,
    players
  }
}
