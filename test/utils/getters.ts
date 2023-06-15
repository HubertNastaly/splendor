import { screen, within } from '@testing-library/react'
import { BasicColor, Color } from '@/types';
import { testId } from '@/constants';

export const getPile = (color: BasicColor) => screen.getByTestId(testId.pile(color))
export const getPlayersInputs = () => screen.getAllByTestId(testId.playerNameInput)
export const getAristocratsPoints = () => screen.getByTestId(testId.aristocratsPoints)
export const getCurrentPlayerInfo = () => screen.getByTestId(testId.currentPlayerInfo)
export const getBank = () => screen.getByTestId(testId.bank)
export const getPlayerPanel = () => screen.getByTestId(testId.playerPanel)
export const getTokenCounter = (color: Color, container: HTMLElement) => within(container).getByTestId(testId.tokenCounter(color))
export const getAristocrat = (aristocratId: number) => screen.getByTestId(testId.aristocrat(aristocratId))
export const getCard = (cardId: number) => screen.getByTestId(testId.card(cardId))
