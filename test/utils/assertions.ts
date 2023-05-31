import { within, screen } from "@testing-library/react"
import { Color } from "@/types"

export function expectTokensAmount(containerName: 'bank' | 'player', tokenColor: Color, amount: number) {
  const container = screen.getByTestId(containerName === 'bank' ? 'bank' : 'player-panel')
  const tokenCounter = within(container).getByTestId(`token-counter-${tokenColor}`)
  expect(tokenCounter.textContent).toEqual(amount.toString())
}
