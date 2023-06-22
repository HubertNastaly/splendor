import { FIXED_BOARD_CARDS_IDS, mockMaxReservedCardsState, mockReservationTargetCardState } from '@/mocks'
import { clickButton, expectCardInPlayerPanel, expectCardNotInBoard, expectTokensAmount, pickTokens, renderGame, selectCard } from './utils'
import { screen } from '@testing-library/react'
import { toHistory } from '@/utils'
import { Store } from '@/types'

describe('reserve card', () => {
  const state = mockReservationTargetCardState()
  const history = toHistory(state)

  const reservationTargetCardId = FIXED_BOARD_CARDS_IDS[1][0]

  test('enabled when no other move type has been started', () => {
    renderGame(history)

    selectCard(reservationTargetCardId)
    const reserveButton = screen.getByText('Reserve card')

    expect(reserveButton).toBeEnabled()
  })

  test('disabled when other move type has been started', () => {
    renderGame(history)

    pickTokens(['red'])
    selectCard(reservationTargetCardId)
    const reserveButton = screen.queryByText('Reserve card')

    expect(reserveButton).not.toBeInTheDocument()
  })

  test('moves card to player\'s area', () => {
    renderGame(history)

    selectCard(reservationTargetCardId)
    clickButton('Reserve card')

    expectCardInPlayerPanel(reservationTargetCardId)
    expectCardNotInBoard(reservationTargetCardId)
  })

  test('grabs one gold token', () => {
    renderGame(history)
    const initialGoldBankAmount = state.bank.gold

    selectCard(reservationTargetCardId)
    clickButton('Reserve card')

    expectTokensAmount('player', 'gold', 1)
    expectTokensAmount('bank', 'gold', initialGoldBankAmount - 1)
  })

  test('can reserve when no gold available', () => {
    const noGoldState: Store = { ...state, bank: { ...state.bank, gold: 0 } }
    renderGame(toHistory(noGoldState))

    selectCard(reservationTargetCardId)
    clickButton('Reserve card')

    expectCardInPlayerPanel(reservationTargetCardId)
    expectTokensAmount('player', 'gold', 0)
  })

  test('cannot reserve more than 3 cards', () => {
    renderGame(toHistory(mockMaxReservedCardsState()))

    selectCard(reservationTargetCardId)
    const reserveCardButton = screen.getByText('Reserve card')

    expect(reserveCardButton).toBeDisabled()
  })

  test('cannot reserve twice in the same turn', () => {
    renderGame(history)

    selectCard(reservationTargetCardId)
    clickButton('Reserve card')

    const anotherCardId = FIXED_BOARD_CARDS_IDS[2][0]
    selectCard(anotherCardId)

    const reserveCardButton = screen.queryByText('Reserve card')
    expect(reserveCardButton).not.toBeInTheDocument()
  })
})
