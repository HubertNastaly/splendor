import { Player, Store } from "../../../../types";
import { createTokensCollection } from "../../../../utils/createTokensCollection";

export function setupPlayers(state: Store, playerNames: string[]): Store {
  const players: Player[] = playerNames.map(createPlayer)
  return {
    ...state,
    players
  }
}

function createPlayer(name: string): Player {
  return {
    name,
    movePhase: { type: 'NONE' },
    tokens: createTokensCollection()
  }
}
