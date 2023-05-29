import { PayloadAction } from '@reduxjs/toolkit'
import { setupPlayers } from './setupPlayers'
import { generateBoard } from './generateBoard'
import { setupTokensBank } from './setupTokensBank'
import { Store } from '@/types'

type Payload = { names: string[] }
export type StartGameAction = PayloadAction<Payload, 'START_GAME'>

export function startGame(state: Store, action: StartGameAction): Store {
  state = setupPlayers(state, action.payload.names)
  state = generateBoard(state)
  state = setupTokensBank(state)
  state.gameState = 'started'

  return state
}
