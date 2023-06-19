import { Color } from '@/types'
import { getAristocratsPoints, getBank, getCurrentPlayerInfo, getPlayerPanel, getTokenCounterWithin, getCardWithin, getBoardCards, queryCardWithin } from './getters'

export function expectTokensAmount(containerName: 'bank' | 'player', tokenColor: Color, amount: number) {
  const container = containerName === 'bank' ? getBank() : getPlayerPanel()
  const tokenCounter = getTokenCounterWithin(tokenColor, container)
  expect(tokenCounter.textContent).toEqual(amount.toString())
}

export function expectAristocratsPoints(expectedPoints: number) {
  expect(getAristocratsPoints()).toHaveTextContent(expectedPoints.toString())
}

export function expectCurrentPlayer(playerName: string) {
  expect(getCurrentPlayerInfo()).toHaveTextContent(playerName)
}

export function expectCardInPlayerPanel(cardId: number) {
  const playerPanel = getPlayerPanel()
  const card = getCardWithin(cardId, playerPanel)
  expect(card).toBeVisible()
}

export function expectCardNotInBoard(cardId: number) {
  const boardCards = getBoardCards()
  const card = queryCardWithin(cardId, boardCards)
  expect(card).not.toBeInTheDocument()
}
