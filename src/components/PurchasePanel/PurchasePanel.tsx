import { Panel, Token } from '@/components/common'
import { TOKEN_SIZE } from '@/constants'
import { useAppSelector } from '@/store/hooks'
import { styled } from '@/theme'
import { Color, Tokens } from '@/types'

export const PurchasePanel = () => {
  const purchaseTokens = useAppSelector(({ purchaseTokens }) => purchaseTokens)
  const tokensArray: Color[] = toTokensArray(purchaseTokens)

  return (
    <Container>
      <TokensGrid>
        {tokensArray.map((color, idx) => (
          <Token key={`purchase-token-${idx}`} color={color} />
        ))}
      </TokensGrid>
      
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
  alignItems: 'center'
})

const TokensGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: `${TOKEN_SIZE}px `.repeat(3),
  gridGap: '$small',
})
