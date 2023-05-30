import { COLORS, Store, Tokens } from '@/types'

export function setupBank(state: Store): Store {
  const basicTokensNumber = getBasicTokensNumber(state.players.length)
  const basicTokens = Object.fromEntries(COLORS.map(color => [color, basicTokensNumber]))
  return {
    ...state,
    bank: {
      ...basicTokens,
      gold: 5
    } as Tokens
  }
}

function getBasicTokensNumber(playersNumber: number) {
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
