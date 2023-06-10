import { ARISTOCRAT_VALUE } from '@/constants'
import { Player } from '@/types'
import { sum } from '@/utils'

export function calculateScore({ cards, aristocrats }: Player) {
  const allCards = Object.values(cards).flat()
  const pointsFromCards = sum(allCards.map(({ value }) => value))
  const pointsFromAristocrats = aristocrats.length * ARISTOCRAT_VALUE

  return pointsFromCards + pointsFromAristocrats
}
