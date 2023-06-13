import { fireEvent, screen } from '@testing-library/react';

export function fillPlayerNames(playerNames: string[]) {
  const inputs = screen.getAllByTestId('player-name-input')
  inputs.forEach((input, index) => {
    fireEvent.input(input, { target: { value: playerNames[index] }})
  })
}
