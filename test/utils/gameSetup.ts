import { fireEvent, screen } from '@testing-library/react';
import { testIds } from '@/constants';

export function fillPlayerNames(playerNames: string[]) {
  const inputs = screen.getAllByTestId(testIds.playerNameInput)
  inputs.forEach((input, index) => {
    fireEvent.input(input, { target: { value: playerNames[index] }})
  })
}
