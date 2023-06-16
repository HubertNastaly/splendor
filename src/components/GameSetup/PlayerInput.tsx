import { MdMan } from 'react-icons/md'
import { styled } from '@/theme'
import { Row } from '@/components/common'
import { testIds } from '@/constants'

interface Props {
  name: string
  setName: (value: string) => void
}

export const PlayerInput = ({ name, setName }: Props) => {
  const iconColor = name ? '#4ee602' : 'black'
  return (
    <Row gap="tiny">
      <MdMan color={iconColor} size={32} />
      <Input
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Player name"
        data-testid={testIds.playerNameInput}
      />
    </Row>
  )
}

const Input = styled('input', {
  padding: '$tiny'
})
