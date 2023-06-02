import { createAction } from '@reduxjs/toolkit'
import { GameState, Store } from '@/types'
import { createTokensCollection, generateBank, generateBoard, generatePlayers } from '@/helpers'

export const startGameAction = createAction('START_GAME', (names: string[]) => ({ payload: { names }}))
export type StartGameAction = ReturnType<typeof startGameAction>

export function startGame(state: Store, { payload: { names }}: StartGameAction): Store {
  const players = generatePlayers(names)
  const { decksByLevel, boardCardsByLevel } = generateBoard()
  const bank = generateBank(state.players.length)
  const gameState: GameState = 'started'
  const purchaseTokens = createTokensCollection()

  return {
    players,
    decksByLevel,
    boardCardsByLevel,
    bank,
    purchaseTokens,
    gameState,
    currentPlayerIndex: 0
  }
}
