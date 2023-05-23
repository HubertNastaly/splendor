import { MAX_PLAYERS_NUMBER, MIN_PLAYERS_NUMBER } from "../../constants"
import { useCallback, useState } from "react"
import { PlayerInput } from "./PlayerInput"
import { styled } from "../../theme"

const DEFAULT_NAMES = new Array(MAX_PLAYERS_NUMBER).fill('')

export const GameSetup = () => {
  const [names, setNames] = useState(DEFAULT_NAMES)

  const setName = useCallback((name: string, index: number) => {
    setNames(names => {
      const newNames = [...names]
      newNames[index] = name
      return newNames
    })
  }, [setNames])

  const canPlay = names.filter(name => !!name).length >= MIN_PLAYERS_NUMBER

  return (
    <Form>
      {names.map((name, index) => (
        <PlayerInput name={name} setName={newName => setName(newName, index)} />
      ))}
      <PlayButton disabled={!canPlay}>Play</PlayButton>
    </Form>
  )
}

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  rowGap: 16,
})

const PlayButton = styled('button', {
  height: 36,
  fontSize: '$normal',
  color: 'white',
  background: 'black',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        background: '$disabled',
        cursor: 'not-allowed'
      }
    }
  }
})

