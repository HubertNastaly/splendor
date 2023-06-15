import { Color } from '@/types'
import { clickElementWithin } from './common'
import { testId } from '@/constants'

export const pickTokens = getManageTokens(testId.bank)
export const payTokens = getManageTokens(testId.playerPanel)

function getManageTokens (areaTestId: string) {
  return (tokenColors: Color[]) => {
    tokenColors.forEach((color) => {
      clickElementWithin(testId.token(color), areaTestId)
    })
  }
}
