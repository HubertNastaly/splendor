import { Color } from '@/types'
import { clickElement } from './common'

export const pickTokens = getManageTokens('bank')
export const payTokens = getManageTokens('player-panel')

function getManageTokens (areaTestId: string) {
  return (tokenColors: Color[]) => {
    tokenColors.forEach((color) => {
      clickElement(`token-${color}`, areaTestId)
    })
  }
}
