// WARNING: This file is generated. Do not modify it manually.

import { screen } from '@testing-library/react'
import { Color } from '@/types'

export const getPlayerInfo = (name: string) => screen.getByTestId(`player-info-${name}`)
export const queryPlayerInfo = (name: string) => screen.queryByTestId(`player-info-${name}`)

export const getAristocrat = (aristocratId: number) => screen.getByTestId(`aristocrat-${aristocratId}`)
export const queryAristocrat = (aristocratId: number) => screen.queryByTestId(`aristocrat-${aristocratId}`)

export const getCard = (cardId: number) => screen.getByTestId(`card-${cardId}`)
export const queryCard = (cardId: number) => screen.queryByTestId(`card-${cardId}`)

export const getToken = (color: Color) => screen.getByTestId(`token-${color}`)
export const queryToken = (color: Color) => screen.queryByTestId(`token-${color}`)

export const getTokenCounter = (color: Color) => screen.getByTestId(`token-counter-${color}`)
export const queryTokenCounter = (color: Color) => screen.queryByTestId(`token-counter-${color}`)

export const getPile = (color: Color) => screen.getByTestId(`pile-${color}`)
export const queryPile = (color: Color) => screen.queryByTestId(`pile-${color}`)

export const getBank = () => screen.getByTestId('bank')
export const queryBank = () => screen.queryByTestId('bank')

export const getBoardAristocrats = () => screen.getByTestId('board-aristocrats')
export const queryBoardAristocrats = () => screen.queryByTestId('board-aristocrats')

export const getCurrentPlayerInfo = () => screen.getByTestId('current-player-info')
export const queryCurrentPlayerInfo = () => screen.queryByTestId('current-player-info')

export const getPlayerNameInput = () => screen.getByTestId('player-name-input')
export const queryPlayerNameInput = () => screen.queryByTestId('player-name-input')

export const getPlayerPanel = () => screen.getByTestId('player-panel')
export const queryPlayerPanel = () => screen.queryByTestId('player-panel')

export const getAristocratsIndicator = () => screen.getByTestId('aristocrats-indicator')
export const queryAristocratsIndicator = () => screen.queryByTestId('aristocrats-indicator')

export const getAristocratsPoints = () => screen.getByTestId('aristocrats-points')
export const queryAristocratsPoints = () => screen.queryByTestId('aristocrats-points')

