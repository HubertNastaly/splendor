import { RESERVATION_TARGET_CARD_ID, mockReservationTargetCardState } from '@/mocks'
import { clickButton, expectCardInPlayerPanel, expectCardNotInBoard, expectTokensAmount, pickTokens, renderGame, selectCard } from './utils'
import { screen } from '@testing-library/react'
import { toHistory } from '@/utils'
import { Store } from '@/types'

describe('reserve card', () => {
  const state = mockReservationTargetCardState()
  const history = toHistory(state)

  test('enabled when no other move type has been started', () => {
    renderGame(history)

    selectCard(RESERVATION_TARGET_CARD_ID)
    const reserveButton = screen.getByText('Reserve card')

    expect(reserveButton).toBeEnabled()
  })

  test('disabled when other move type has been started', () => {
    renderGame(history)

    pickTokens(['red'])
    selectCard(RESERVATION_TARGET_CARD_ID)
    const reserveButton = screen.queryByText('Reserve card')

    expect(reserveButton).not.toBeInTheDocument()
  })

  test('moves card to player\'s area', () => {
    renderGame(history)

    selectCard(RESERVATION_TARGET_CARD_ID)
    clickButton('Reserve card')

    expectCardInPlayerPanel(RESERVATION_TARGET_CARD_ID)
    expectCardNotInBoard(RESERVATION_TARGET_CARD_ID)
  })

  test('grabs one gold token', () => {
    renderGame(history)
    const initialGoldBankAmount = state.bank.gold

    selectCard(RESERVATION_TARGET_CARD_ID)
    clickButton('Reserve card')

    expectTokensAmount('player', 'gold', 1)
    expectTokensAmount('bank', 'gold', initialGoldBankAmount - 1)
  })

  test('can reserve when no gold available', () => {
    const noGoldState: Store = { ...state, bank: { ...state.bank, gold: 0 } }
    renderGame(toHistory(noGoldState))

    selectCard(RESERVATION_TARGET_CARD_ID)
    clickButton('Reserve card')

    expectCardInPlayerPanel(RESERVATION_TARGET_CARD_ID)
    expectTokensAmount('player', 'gold', 0)
  })

  test.todo('cannot reserve more than 3 cards')

  test.todo('cannot reserve twice in the same turn')
})
