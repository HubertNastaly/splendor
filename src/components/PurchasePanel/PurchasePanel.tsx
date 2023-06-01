import { Button, Panel, Token } from '@/components/common'
import { TOKEN_SIZE } from '@/constants'
import { isCardPriceFulfilled } from '@/helpers'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { styled } from '@/theme'
import { Color, Tokens } from '@/types'

export const PurchasePanel = () => {
  const dispatch = useAppDispatch()
  const { purchaseTokens, currentPlayer } = useAppSelector(({ purchaseTokens, players, currentPlayerIndex }) => ({
    purchaseTokens,
    currentPlayer: players[currentPlayerIndex]
  }))
  const tokensArray: Color[] = toTokensArray(purchaseTokens)

  const { cards, movePhase } = currentPlayer

  if(!(movePhase.type === 'CARD_PURCHASE_STARTED')) {
    return <></>
  }

  const canBuy = isCardPriceFulfilled(cards, purchaseTokens, movePhase.selectedCard.price)

  const cancel = () => dispatch({ type: 'CANCEL_PURCHASE' })
  const finalizePurchase = () => dispatch({ type: 'FINALIZE_PURCHASE' })

  return (
    <Container>
      <TokensGrid>
        {tokensArray.map((color, idx) => (
          <Token key={`purchase-token-${idx}`} color={color} />
        ))}
      </TokensGrid>
      <Button view="secondary" onClick={cancel}>Cancel</Button>
      <Button disabled={!canBuy} onClick={finalizePurchase}>Buy</Button>
    </Container>
  )
}

function toTokensArray(tokens: Tokens) {
  const entries = Object.entries(tokens) as [Color, number][]
  return entries.flatMap(([color, amount]) => new Array<Color>(amount).fill(color))
}

const Container = styled(Panel, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  rowGap: '$tiny'
})

const TokensGrid = styled('div', {
  flex: 1,
  display: 'grid',
  gridTemplateColumns: `${TOKEN_SIZE}px `.repeat(3),
  gridAutoRows: TOKEN_SIZE,
  gridGap: '$small',
})
