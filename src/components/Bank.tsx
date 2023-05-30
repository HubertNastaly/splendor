import { useCallback } from 'react'
import { Color } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store'
import { isToCollectDuplicatedThirdToken, isEnoughTokensInBank  } from '@/utils'
import { styled } from '@/theme'
import { TokenCounter } from './common'
import { ALLOWED_COLLECTING_PHASES } from '@/constants'

export const Bank = () => {
  const dispatch = useAppDispatch()
  const { bank: { tokens, gold }, currentPlayer, movePhase } = useAppSelector(({ bank, players, currentPlayerIndex }) => {
    const currentPlayer = players[currentPlayerIndex]
    return {
      bank,
      currentPlayer,
      movePhase: currentPlayer.movePhase.type
    }
  })
  
  const canCollect = ALLOWED_COLLECTING_PHASES.includes(movePhase)

  const isTokenDisabled = useCallback((tokenColor: Color) => {
    if(!canCollect) {
      return true
    }
    if(isToCollectDuplicatedThirdToken(currentPlayer, tokenColor)) {
      return true
    }
    return !isEnoughTokensInBank(tokens, currentPlayer, tokenColor)
  }, [canCollect, tokens, currentPlayer])

  const collectToken = (tokenColor: Color) => dispatch({ type: 'PICK_TOKEN', payload: { tokenColor }})

  const tokenEntries = Object.entries(tokens) as [Color, number][]

  return (
    <Panel>
      {tokenEntries.map(([color, count]) => (
        <TokenCounter
          key={`token-row-${color}`}
          color={color}
          count={count}
          onClick={() => collectToken(color)}
          disabled={isTokenDisabled(color)}
        />
      ))}
      <TokenCounter color="gold" count={gold} />
    </Panel>
  )
}

const Panel = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$big'
})
