import { Color } from '@/types'
import { clickElementWithin } from './common'
import { testIds } from '@/constants'

export const pickTokens = getManageTokens(testIds.bank)
export const payTokens = getManageTokens(testIds.playerPanel)

function getManageTokens (areaTestId: string) {
  return (tokenColors: Color[]) => {
    tokenColors.forEach((color) => {
      clickElementWithin(testIds.token(color), areaTestId)
    })
  }
}
