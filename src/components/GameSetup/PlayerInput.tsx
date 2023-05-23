import { MdMan } from 'react-icons/md'
import { styled } from "../../theme"

interface Props {
  name: string
  setName: (value: string) => void
}

export const PlayerInput = ({ name, setName }: Props) => {
  const iconColor = name ? '#4ee602' : 'black'
  return (
    <Wrapper>
      <MdMan color={iconColor} size={32} />
      <Input value={name} onChange={event => setName(event.target.value)} placeholder="Player name" />
    </Wrapper>
  )
}

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: 8

})

const Input = styled('input', {
  padding: 8
})
