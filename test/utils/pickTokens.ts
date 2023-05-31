import { fireEvent, screen, within } from '@testing-library/react'
import { Color } from "@/types";

export function pickTokens(tokenColors: Color[]) {
  const bank = screen.getByTestId('bank')

  tokenColors.forEach((color) => {
    const token = within(bank).getByTestId(`token-${color}`)
    fireEvent.click(token)
  })
}
