import allCards from '@/data/cards.json'
import { mockCardToBuyState, mockPlayerWithCardState } from '@/mocks'
import { clone } from '@/utils'
import {
  buyCard,
  getRequiredTokens,
  clickButton,
  expectCardInPlayerPanel,
  expectCardNotInBoard,
  expectCurrentPlayerScore,
  expectTokensAmount,
  payCardPrice,
  payTokens,
  queryPurchasePanel,
  renderGame,
  selectCard,
  startCardPurchase
} from './utils'
import { screen } from '@testing-library/react'
import { BASIC_COLORS, CardData, Color, TOKEN_COLORS, Tokens } from '@/types'

describe('buy card', () => {
  const { mockState, purchaseTargetCardId } = mockCardToBuyState
  const state = mockState()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const purchaseTargetCard = allCards.find(({ id }) => id === purchaseTargetCardId)! as CardData

  const loadInitialState = () => renderGame(state)

  test('cannot buy with insufficient tokens amount', () => {
    loadInitialState()

    selectCard(purchaseTargetCard.id)
    startCardPurchase()

    const requiredTokens = getRequiredTokens(purchaseTargetCard.price)
    const notEnoughTokens = requiredTokens.slice(0, -1)
    payTokens(notEnoughTokens)

    const buyButton = screen.getByText('Buy')
    expect(buyButton).toBeDisabled()
  })

  test('can buy with proper tokens amount', () => {
    loadInitialState()

    selectCard(purchaseTargetCard.id)
    startCardPurchase()
    payCardPrice(purchaseTargetCard.id)

    const buyButton = screen.getByText('Buy')
    expect(buyButton).toBeEnabled()
  })

  test('can use gold as a token substitute', () => {
    loadInitialState()

    selectCard(purchaseTargetCard.id)
    startCardPurchase()

    const requiredTokens = getRequiredTokens(purchaseTargetCard.price)
    payTokens([...requiredTokens.slice(0, -1), 'gold'] as Color[])

    const buyButton = screen.getByText('Buy')
    expect(buyButton).toBeEnabled()
  })

  test('reduces price by player\'s cards', () => {
    const state = mockPlayerWithCardState.mockState()
    renderGame(state)

    selectCard(purchaseTargetCard.id)
    startCardPurchase()
    payCardPrice(purchaseTargetCard.id)
    
    const buyButton = screen.getByText('Buy')
    expect(buyButton).toBeEnabled()
  })

  test('transfers player\'s tokens to bank', () => {
    loadInitialState()
    const currentPlayer = state.players[state.currentPlayerIndex]
    const initialPlayerTokens: Tokens = clone(currentPlayer.tokens)
    const initialBankTokens: Tokens = clone(state.bank)

    buyCard(purchaseTargetCard.id)

    for(const color of BASIC_COLORS) {
      const colorCost = purchaseTargetCard.price[color]
      expectTokensAmount('player', color, initialPlayerTokens[color] - colorCost)
      expectTokensAmount('bank', color, initialBankTokens[color] + colorCost)
    }
  })

  test('moves card from board to player panel', () => {
    loadInitialState()

    buyCard(purchaseTargetCard.id)

    expectCardInPlayerPanel(purchaseTargetCard.id)
    expectCardNotInBoard(purchaseTargetCard.id)
  })

  test('can cancel purchase before paying tokens', () => {
    loadInitialState()
    const currentPlayer = state.players[state.currentPlayerIndex]
    const initialPlayerTokens: Tokens = clone(currentPlayer.tokens)

    selectCard(purchaseTargetCard.id)
    startCardPurchase()
    clickButton('Cancel')

    expect(queryPurchasePanel()).not.toBeInTheDocument()
    for(const color of TOKEN_COLORS) {
      expectTokensAmount('player', color, initialPlayerTokens[color])
    }
  })

  test('can cancel purchase when some tokens in purchase panel', () => {
    loadInitialState()
    const currentPlayer = state.players[state.currentPlayerIndex]
    const initialPlayerTokens: Tokens = clone(currentPlayer.tokens)

    selectCard(purchaseTargetCard.id)
    startCardPurchase()
    payCardPrice(purchaseTargetCard.id)
    clickButton('Cancel')

    expect(queryPurchasePanel()).not.toBeInTheDocument()
    for(const color of TOKEN_COLORS) {
      expectTokensAmount('player', color, initialPlayerTokens[color])
    }
  })

  test('increases player\'s score', () => {
    loadInitialState()
    expectCurrentPlayerScore(0)

    buyCard(purchaseTargetCard.id)

    expectCurrentPlayerScore(purchaseTargetCard.value)
  })
})
