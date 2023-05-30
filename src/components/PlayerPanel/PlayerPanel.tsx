import { styled } from '@/theme'
import { PlayerTokens } from './PlayerTokens'

export const PlayerPanel = () => {
  return (
    <Container>
      <PlayerTokens />
    </Container>
  )
}

const Container = styled('div', {
  padding: '$big',
  borderRadius: 8,
  outline: '2px solid white',
  backgroundColor: '$panel'
})
