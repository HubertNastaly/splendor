import { PayloadAction } from '@reduxjs/toolkit'
import { GameState, Store } from '@/types'
import { createTokensCollection, generateBank, generateBoard, generatePlayers } from '@/helpers'

type Payload = { names: string[] }
export type StartGameAction = PayloadAction<Payload, 'START_GAME'>

export function startGame(state: Store, { payload: { names }}: StartGameAction): Store {
  const players = generatePlayers(names)
  const { decksByLevel, boardCardsByLevel } = generateBoard()
  const bank = generateBank(state.players.length)
  const gameState: GameState = 'started'
  const purchaseTokensPool = createTokensCollection()

  return {
    players,
    decksByLevel,
    boardCardsByLevel,
    bank,
    purchaseTokensPool,
    gameState,
    currentPlayerIndex: 0
  }
}
