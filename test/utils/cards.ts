import allCards from '@/data/cards.json'
import { BasicColor } from '@/types'
import { screen } from '@testing-library/react'
import { payTokens } from './tokens'
import { clickButton, clickElement } from './common'

const selectCard = (cardId: number) => clickElement(`card-${cardId}`)
const startCardPurchase = () => clickButton('Buy card')
const confirmCardPurchase = () => clickButton('Buy')

function payCardPrice(cardId: number) {
  const cardData = allCards.find(({ id }) => id === cardId)
  if(!cardData) {
    throw new Error('Invalid card ID')
  }

  const { price } = cardData
  const requiredTokens: BasicColor[] = []
  for(const key in price) {
    const color = key as BasicColor
    const requiredTokensAmount = getRequiredTokens(color, price[color])
    requiredTokens.push(...new Array(requiredTokensAmount).fill(color))
  }

  payTokens(requiredTokens)
}

function getRequiredTokens(color: BasicColor, cardCost: number) {
  const pile = screen.getByTestId(`pile-${color}`)
  const cardsNumber = pile.children.length
  return Math.max(0, cardCost - cardsNumber)
}

export function buyCard(cardId: number) {
  selectCard(cardId)
  startCardPurchase()
  payCardPrice(cardId)
  confirmCardPurchase()
}
