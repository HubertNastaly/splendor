import { Player, Store } from "../../../../../types";

export function setupPlayers(state: Store, playerNames: string[]): Store {
  const players: Player[] = playerNames.map(name => ({ name }))
  return {
    ...state,
    players
  }
}
