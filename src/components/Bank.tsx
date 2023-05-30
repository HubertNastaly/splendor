import { useCallback } from 'react'
import { Color } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store'
import { isToCollectDuplicatedThirdToken, isEnoughTokensInBank, canCollectToken  } from '@/utils'
import { styled } from '@/theme'
import { TokenCounter } from './common'

export const Bank = () => {
  const dispatch = useAppDispatch()
  const { bank: { tokens, gold }, currentPlayer } = useAppSelector(({ bank, players, currentPlayerIndex }) => {
    const currentPlayer = players[currentPlayerIndex]
    return {
      bank,
      currentPlayer,
      movePhase: currentPlayer.movePhase.type
    }
  })

  const isTokenDisabled = useCallback((tokenColor: Color) => {
    if(!canCollectToken(currentPlayer)) {
      return true
    }
    if(isToCollectDuplicatedThirdToken(currentPlayer, tokenColor)) {
      return true
    }
    return !isEnoughTokensInBank(tokens, currentPlayer, tokenColor)
  }, [tokens, currentPlayer])

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
