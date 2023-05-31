import { Color, Tokens } from '@/types';

export function transfer(from: Tokens, to: Tokens, tokenColor: Color, amount: number): [Tokens, Tokens] {
  if(from[tokenColor] < amount) {
    throw new Error('Not enough tokens')
  }

  from[tokenColor] -= amount
  to[tokenColor] += amount

  return [from, to]
}
