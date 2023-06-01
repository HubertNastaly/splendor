import { BASIC_COLORS, Tokens } from '@/types'

export function generateBank(playersNumber: number): Tokens {
  const basicTokensNumber = getBasicTokensNumber(playersNumber)
  const basicTokens = Object.fromEntries(BASIC_COLORS.map(color => [color, basicTokensNumber]))
  return {
    ...basicTokens,
    gold: 5
  } as Tokens
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
