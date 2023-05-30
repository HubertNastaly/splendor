import { useCallback } from 'react'
import { BasicColor, Color } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store'
import { isToCollectDuplicatedThirdToken, isEnoughTokensInBank, canCollectToken  } from '@/helpers'
import { styled } from '@/theme'
import { TokenCounter } from './common'

export const Bank = () => {
  const dispatch = useAppDispatch()
  const { bank, currentPlayer } = useAppSelector(({ bank, players, currentPlayerIndex }) => {
    const currentPlayer = players[currentPlayerIndex]
    return {
      bank,
      currentPlayer,
      movePhase: currentPlayer.movePhase.type
    }
  })

  const isTokenDisabled = useCallback((tokenColor: BasicColor) => {
    if(!canCollectToken(currentPlayer)) {
      return true
    }
    if(isToCollectDuplicatedThirdToken(currentPlayer, tokenColor)) {
      return true
    }
    return !isEnoughTokensInBank(bank, currentPlayer, tokenColor)
  }, [bank, currentPlayer])

  const collectToken = (tokenColor: BasicColor) => dispatch({ type: 'PICK_TOKEN', payload: { tokenColor }})

  const tokenEntries = Object.entries(bank) as [Color, number][]

  return (
    <Panel>
      {tokenEntries.map(([color, count]) => (
        <TokenCounter
          key={`token-row-${color}`}
          color={color}
          count={count}
          {...color !== 'gold' && {
            onClick: () => collectToken(color),
            disabled: isTokenDisabled(color)
          }}
        />
      ))}
    </Panel>
  )
}

const Panel = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$big'
})
