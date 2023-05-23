import { COLORS, Store, Tokens } from "../../../../types";

export function setupTokensBank(state: Store) {
  const tokensNumber = getTokensNumber(state.players.length)
  const bankTokens = Object.fromEntries(COLORS.map(color => [color, tokensNumber])) as Tokens
  return {
    ...state,
    bankTokens
  }
}

function getTokensNumber(playersNumber: number) {
  switch(playersNumber) {
    case 2:
      return 4
    case 3:
      return 5
    case 4:
      return 7
    default:
      return 0
  }
}
