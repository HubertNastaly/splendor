import { useCallback } from 'react'
import { Token } from './Token'
import { Color, PlayerMovePhase } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store'
import { isToCollectDuplicatedThirdToken, isEnoughTokensInBank  } from '@/utils'
import { styled } from '@/theme'

const ALLOWED_COLLECTING_PHASES: PlayerMovePhase['type'][] = [
  'NONE',
  '1_TOKEN_COLLECTED',
  '2_DIFFERENT_TOKENS_COLLECTED'
]

export const Bank = () => {
  const dispatch = useAppDispatch()
  const { bank: { tokens, gold }, players, currentPlayerIndex } = useAppSelector(state => state)
  const tokenEntries = Object.entries(tokens) as [Color, number][]

  const currentPlayer = players[currentPlayerIndex]
  const canCollect = ALLOWED_COLLECTING_PHASES.includes(currentPlayer.movePhase.type)

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

  return (
    <Panel>
      {tokenEntries.map(([color, count]) => (
        <Row key={`token-row-${color}`}>
          <Token
            color={color}
            onClick={() => collectToken(color)}
            disabled={isTokenDisabled(color)}
          />
          <Count>{count}</Count>
        </Row>
      ))}
      <Row key="token-row-gold">
        <Token color="gold" />
        <Count>{gold}</Count>
      </Row>
    </Panel>
  )
}

const Panel = styled('div', {
  display: 'flex',
  columnGap: 32
})

const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: 8
})

const Count = styled('span', {
  fontSize: '$big'
})
