import { within, screen } from '@testing-library/react'
import { Color } from '@/types'

export function expectTokensAmount(containerName: 'bank' | 'player', tokenColor: Color, amount: number) {
  const container = screen.getByTestId(containerName === 'bank' ? 'bank' : 'player-panel')
  const tokenCounter = within(container).getByTestId(`token-counter-${tokenColor}`)
  expect(tokenCounter.textContent).toEqual(amount.toString())
}

export function expectAristocratsPoints(expectedPoints: number) {
  const aristocratsPoints = screen.getByTestId('aristocrats-points')
  expect(aristocratsPoints).toHaveTextContent(expectedPoints.toString())
}

export function expectCurrentPlayer(playerName: string) {
  const currentPlayerInfo = screen.getByTestId('current-player-info')
  expect(currentPlayerInfo).toHaveTextContent(playerName)
}
