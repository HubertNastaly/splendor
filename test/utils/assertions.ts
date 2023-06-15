import { Color } from '@/types'
import { getAristocratsPoints, getBank, getCurrentPlayerInfo, getPlayerPanel, getTokenCounter } from './getters'

export function expectTokensAmount(containerName: 'bank' | 'player', tokenColor: Color, amount: number) {
  const container = containerName === 'bank' ? getBank() : getPlayerPanel()
  const tokenCounter = getTokenCounter(tokenColor, container)
  expect(tokenCounter.textContent).toEqual(amount.toString())
}

export function expectAristocratsPoints(expectedPoints: number) {
  expect(getAristocratsPoints()).toHaveTextContent(expectedPoints.toString())
}

export function expectCurrentPlayer(playerName: string) {
  expect(getCurrentPlayerInfo()).toHaveTextContent(playerName)
}
