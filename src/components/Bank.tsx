import { useCallback } from 'react'
import { BasicColor, Color } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { isToCollectDuplicatedThirdToken, isEnoughTokensInBank, canCollectToken  } from '@/helpers'
import { Column, TokenCounter } from './common'
import { pickTokenAction } from '@/store/actions'

export const Bank = () => {
  const dispatch = useAppDispatch()
  const { bank, currentPlayer } = useAppSelector(({ bank, players, currentPlayerIndex }) => {
    const currentPlayer = players[currentPlayerIndex]
    return { bank, currentPlayer }
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

  const collectToken = (tokenColor: BasicColor) => dispatch(pickTokenAction(tokenColor))

  const tokenEntries = Object.entries(bank) as [Color, number][]

  return (
    <Column data-testid="bank">
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
    </Column>
  )
}
