import { screen, fireEvent } from '@testing-library/react'

export function pickAristocratById(aristocratId: number) {
  const aristocrat = screen.getByTestId(`aristocrat-${aristocratId}`)
  fireEvent.click(aristocrat)
}
