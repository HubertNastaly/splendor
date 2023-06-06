import allAristocrats from '@/data/aristocrats.json'
import { Aristocrat } from '@/types'
import { shuffle } from '@/utils'

export function generateAristocrats(playersNumber: number): Aristocrat[] {
  const aristocratsNumber = playersNumber + 1
  const shuffledAristocrats = shuffle(allAristocrats as Aristocrat[])
  return shuffledAristocrats.slice(0, aristocratsNumber)
}
