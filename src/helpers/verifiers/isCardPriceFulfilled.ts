import { COLORS, CardsByColor, Tokens } from '@/types';
import { sum } from '@/utils';
import { createTokensCollection } from '..';

export function isCardPriceFulfilled(playerCards: CardsByColor, purchaseTokens: Tokens, cardPrice: Tokens) {
  const reducedPrice = createTokensCollection()

  // use cards gems
  for(const tokenColor of COLORS) {
    reducedPrice[tokenColor] = Math.max(0, cardPrice[tokenColor] - playerCards[tokenColor].length)
  }

  // use basic tokens
  for(const tokenColor of COLORS) {
    if(purchaseTokens[tokenColor] > cardPrice[tokenColor]) {
      return false
    }
    reducedPrice[tokenColor] -= purchaseTokens[tokenColor]
  }

  // use gold
  const priceTokensLeft = sum(Object.values(reducedPrice))
  return purchaseTokens.gold === priceTokensLeft
}
