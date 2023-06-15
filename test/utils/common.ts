import { fireEvent, screen, within } from '@testing-library/react';

export function clickButton(buttonText: string) {
  const button = screen.getByText(buttonText)
  fireEvent.click(button)
}

export function clickElementWithin(elementTestId: string, containerTestId: string) {
  const container = within(screen.getByTestId(containerTestId))
  const element = container.getByTestId(elementTestId)
  fireEvent.click(element)
}
