import { fireEvent, screen, within } from '@testing-library/react'
import { Color } from '@/types'

export const pickTokens = getManageTokens('bank')
export const payTokens = getManageTokens('player-panel')

function getManageTokens(areaTestId: string) {
  return function(tokenColors: Color[]) {
    const area = within(screen.getByTestId(areaTestId))
    tokenColors.forEach((color) => {
      const token = area.getByTestId(`token-${color}`)
      fireEvent.click(token)
    })
  }
}
