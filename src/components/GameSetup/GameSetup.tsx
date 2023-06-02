import { FormEvent, useCallback, useState } from 'react'
import { MAX_PLAYERS_NUMBER, MIN_PLAYERS_NUMBER } from '@/constants'
import { PlayerInput } from './PlayerInput'
import { useAppDispatch } from '@/store/hooks'
import { styled } from '@/theme'
import { Page, Button } from '@/components/common'
import { startGameAction } from '@/store/actions'

const DEFAULT_NAMES = new Array(MAX_PLAYERS_NUMBER).fill('')

export const GameSetup = () => {
  const dispatch = useAppDispatch()
  const [names, setNames] = useState(DEFAULT_NAMES)

  const setName = useCallback((name: string, index: number) => {
    setNames(names => {
      const newNames = [...names]
      newNames[index] = name
      return newNames
    })
  }, [setNames])

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const nonEmptyNames = names.filter(name => !!name)
    dispatch(startGameAction(nonEmptyNames))
  }

  const canPlay = names.filter(name => !!name).length >= MIN_PLAYERS_NUMBER

  return (
    <Page>
      <Form onSubmit={submit}>
        {names.map((name, index) => (
          <PlayerInput key={`player-${index}`} name={name} setName={newName => setName(newName, index)} />
        ))}
        <Button disabled={!canPlay}>Play</Button>
      </Form>
    </Page>
  )
}

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  rowGap: 16,
})
