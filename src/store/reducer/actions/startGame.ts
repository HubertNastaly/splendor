import { PayloadAction } from '@reduxjs/toolkit'
import { GameState, Store } from '@/types'
import { generateBank, generateBoard, generatePlayers } from '@/helpers'

type Payload = { names: string[] }
export type StartGameAction = PayloadAction<Payload, 'START_GAME'>

export function startGame(state: Store, { payload: { names }}: StartGameAction): Store {
  const players = generatePlayers(names)
  const { decksByLevel, boardCardsByLevel } = generateBoard()
  const bank = generateBank(state.players.length)
  const gameState: GameState = 'started'

  return {
    players,
    decksByLevel,
    boardCardsByLevel,
    bank,
    gameState,
    currentPlayerIndex: 0
  }
}
