import { fireEvent } from '@testing-library/react';
import { getPlayersInputs } from './getters';

export function fillPlayerNames(playerNames: string[]) {
  const inputs = getPlayersInputs()
  inputs.forEach((input, index) => {
    fireEvent.input(input, { target: { value: playerNames[index] }})
  })
}
