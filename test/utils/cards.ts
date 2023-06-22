import { fireEvent } from '@testing-library/dom'
import allCards from '@/data/cards.json'
import { BasicColor, CardPrice } from '@/types'
import { payTokens } from './tokens'
import { clickButton } from './common'
import { getCard, getPile } from './getters'

export const selectCard = (cardId: number) => fireEvent.click(getCard(cardId))
export const startCardPurchase = () => clickButton('Buy card')
const confirmCardPurchase = () => clickButton('Buy')

export function getRequiredTokens(price: CardPrice) {
  const requiredTokens: BasicColor[] = []
  for(const key in price) {
    const color = key as BasicColor
    const requiredTokensAmount = reducePriceByCards(color, price[color])
    requiredTokens.push(...new Array(requiredTokensAmount).fill(color))
  }

  return requiredTokens
}

export function payCardPrice(cardId: number) {
  const cardData = allCards.find(({ id }) => id === cardId)
  if(!cardData) {
    throw new Error('Invalid card ID')
  }

  const { price } = cardData
  const requiredTokens = getRequiredTokens(price)

  payTokens(requiredTokens)
}

function reducePriceByCards(color: BasicColor, cardCost: number) {
  const pile = getPile(color)
  const cardsNumber = pile.children.length
  return Math.max(0, cardCost - cardsNumber)
}

export function buyCard(cardId: number) {
  selectCard(cardId)
  startCardPurchase()
  payCardPrice(cardId)
  confirmCardPurchase()
}
