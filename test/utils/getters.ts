// WARNING: This file is generated. Do not modify it manually.

import { screen, within } from '@testing-library/react'
import { Color } from '@/types'

export const getPlayerInfo = (name: string) => screen.getByTestId(`player-info-${name}`)
export const getPlayerInfoWithin = (name: string, container: HTMLElement) => within(container).getByTestId(`player-info-${name}`)
export const queryPlayerInfo = (name: string) => screen.queryByTestId(`player-info-${name}`)
export const queryPlayerInfoWithin = (name: string, container: HTMLElement) => within(container).queryByTestId(`player-info-${name}`)

export const getAristocrat = (aristocratId: number) => screen.getByTestId(`aristocrat-${aristocratId}`)
export const getAristocratWithin = (aristocratId: number, container: HTMLElement) => within(container).getByTestId(`aristocrat-${aristocratId}`)
export const queryAristocrat = (aristocratId: number) => screen.queryByTestId(`aristocrat-${aristocratId}`)
export const queryAristocratWithin = (aristocratId: number, container: HTMLElement) => within(container).queryByTestId(`aristocrat-${aristocratId}`)

export const getCard = (cardId: number) => screen.getByTestId(`card-${cardId}`)
export const getCardWithin = (cardId: number, container: HTMLElement) => within(container).getByTestId(`card-${cardId}`)
export const queryCard = (cardId: number) => screen.queryByTestId(`card-${cardId}`)
export const queryCardWithin = (cardId: number, container: HTMLElement) => within(container).queryByTestId(`card-${cardId}`)

export const getToken = (color: Color) => screen.getByTestId(`token-${color}`)
export const getTokenWithin = (color: Color, container: HTMLElement) => within(container).getByTestId(`token-${color}`)
export const queryToken = (color: Color) => screen.queryByTestId(`token-${color}`)
export const queryTokenWithin = (color: Color, container: HTMLElement) => within(container).queryByTestId(`token-${color}`)

export const getTokenCounter = (color: Color) => screen.getByTestId(`token-counter-${color}`)
export const getTokenCounterWithin = (color: Color, container: HTMLElement) => within(container).getByTestId(`token-counter-${color}`)
export const queryTokenCounter = (color: Color) => screen.queryByTestId(`token-counter-${color}`)
export const queryTokenCounterWithin = (color: Color, container: HTMLElement) => within(container).queryByTestId(`token-counter-${color}`)

export const getPile = (color: Color) => screen.getByTestId(`pile-${color}`)
export const getPileWithin = (color: Color, container: HTMLElement) => within(container).getByTestId(`pile-${color}`)
export const queryPile = (color: Color) => screen.queryByTestId(`pile-${color}`)
export const queryPileWithin = (color: Color, container: HTMLElement) => within(container).queryByTestId(`pile-${color}`)

export const getBank = () => screen.getByTestId('bank')
export const getBankWithin = (container: HTMLElement) => within(container).getByTestId('bank')
export const queryBank = () => screen.queryByTestId('bank')
export const queryBankWithin = (container: HTMLElement) => within(container).queryByTestId('bank')

export const getBoardAristocrats = () => screen.getByTestId('board-aristocrats')
export const getBoardAristocratsWithin = (container: HTMLElement) => within(container).getByTestId('board-aristocrats')
export const queryBoardAristocrats = () => screen.queryByTestId('board-aristocrats')
export const queryBoardAristocratsWithin = (container: HTMLElement) => within(container).queryByTestId('board-aristocrats')

export const getBoardCards = () => screen.getByTestId('board-cards')
export const getBoardCardsWithin = (container: HTMLElement) => within(container).getByTestId('board-cards')
export const queryBoardCards = () => screen.queryByTestId('board-cards')
export const queryBoardCardsWithin = (container: HTMLElement) => within(container).queryByTestId('board-cards')

export const getCurrentPlayerInfo = () => screen.getByTestId('current-player-info')
export const getCurrentPlayerInfoWithin = (container: HTMLElement) => within(container).getByTestId('current-player-info')
export const queryCurrentPlayerInfo = () => screen.queryByTestId('current-player-info')
export const queryCurrentPlayerInfoWithin = (container: HTMLElement) => within(container).queryByTestId('current-player-info')

export const getPlayerNameInput = () => screen.getByTestId('player-name-input')
export const getPlayerNameInputWithin = (container: HTMLElement) => within(container).getByTestId('player-name-input')
export const queryPlayerNameInput = () => screen.queryByTestId('player-name-input')
export const queryPlayerNameInputWithin = (container: HTMLElement) => within(container).queryByTestId('player-name-input')

export const getPlayerPanel = () => screen.getByTestId('player-panel')
export const getPlayerPanelWithin = (container: HTMLElement) => within(container).getByTestId('player-panel')
export const queryPlayerPanel = () => screen.queryByTestId('player-panel')
export const queryPlayerPanelWithin = (container: HTMLElement) => within(container).queryByTestId('player-panel')

export const getAristocratsIndicator = () => screen.getByTestId('aristocrats-indicator')
export const getAristocratsIndicatorWithin = (container: HTMLElement) => within(container).getByTestId('aristocrats-indicator')
export const queryAristocratsIndicator = () => screen.queryByTestId('aristocrats-indicator')
export const queryAristocratsIndicatorWithin = (container: HTMLElement) => within(container).queryByTestId('aristocrats-indicator')

export const getAristocratsPoints = () => screen.getByTestId('aristocrats-points')
export const getAristocratsPointsWithin = (container: HTMLElement) => within(container).getByTestId('aristocrats-points')
export const queryAristocratsPoints = () => screen.queryByTestId('aristocrats-points')
export const queryAristocratsPointsWithin = (container: HTMLElement) => within(container).queryByTestId('aristocrats-points')

