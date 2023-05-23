import { useAppDispatch, useAppSelector } from "../store"
import { styled } from "../theme"
import { Color } from "../types"
import { Token } from "./Token"

export const TokensBank = () => {
  const dispatch = useAppDispatch()
  const tokens = useAppSelector(({ bankTokens }) => bankTokens)
  const tokenEntries = Object.entries(tokens) as [Color, number][]

  const collectToken = (tokenColor: Color) => dispatch({ type: 'PICK_TOKEN', payload: { tokenColor }}) 

  return (
    <Panel>
      {tokenEntries.map(([color, count]) => (
        <Row key={`token-row-${color}`}>
          <Token color={color} onClick={() => collectToken(color)} />
          <Count>{count}</Count>
        </Row>
      ))}
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
