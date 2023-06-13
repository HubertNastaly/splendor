import { fireEvent, screen, within } from '@testing-library/react';

export function clickButton(buttonText: string) {
  const button = screen.getByText(buttonText)
  fireEvent.click(button)
}

export function clickElement(elementTestId: string, containerTestId?: string) {
  const container = containerTestId ? within(screen.getByTestId(containerTestId)) : screen
  const element = container.getByTestId(elementTestId)
  fireEvent.click(element)
}
