import { screen, within } from '@testing-library/react'
import { BasicColor, Color } from '@/types';
import { testIds } from '@/constants';

export const getPile = (color: BasicColor) => screen.getByTestId(testIds.pile(color))
export const getPlayersInputs = () => screen.getAllByTestId(testIds.playerNameInput)
export const getAristocratsPoints = () => screen.getByTestId(testIds.aristocratsPoints)
export const getCurrentPlayerInfo = () => screen.getByTestId(testIds.currentPlayerInfo)
export const getBank = () => screen.getByTestId(testIds.bank)
export const getPlayerPanel = () => screen.getByTestId(testIds.playerPanel)
export const getTokenCounter = (color: Color, container: HTMLElement) => within(container).getByTestId(testIds.tokenCounter(color))
export const getAristocrat = (aristocratId: number) => screen.getByTestId(testIds.aristocrat(aristocratId))
export const getCard = (cardId: number) => screen.getByTestId(testIds.card(cardId))
