import { Color, Tokens } from '@/types';

export const transfer = {
  toBank: (playerTokens: Tokens, bank: Tokens, tokenColor: Color, amount: number) => {
    if(playerTokens[tokenColor] < amount) {
      throw new Error('Not enough tokens')
    }
    playerTokens[tokenColor] -= amount
    bank[tokenColor] += amount

    return { playerTokens, bank }
  },
  toPlayer: (playerTokens: Tokens, bank: Tokens, tokenColor: Color, amount: number) => {
    if(bank[tokenColor] < amount) {
      throw new Error('Not enough tokens in bank')
    }
    bank[tokenColor] -= amount
    playerTokens[tokenColor] += amount

    return { playerTokens, bank }
  },
}
