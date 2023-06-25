import { mockCollectableAristocratState } from '@/mocks'
import { ARISTOCRAT_VALUE } from '@/constants'
import { expectAristocratsPoints, renderGame, pickAristocratById } from './utils'

describe('aristocrats', () => {
  const { mockState, collectableAristocratsIds, uncollectableAristocratId } = mockCollectableAristocratState
  const state = mockState()

  beforeEach(() => renderGame(state))

  test.todo('apply special styles when collectable')

  test('can pick aristocrat when collectable', () => {
    pickAristocratById(collectableAristocratsIds[0])
    expectAristocratsPoints(ARISTOCRAT_VALUE)
  })

  test('cannot pick two collectable aristocrats in one round', () => {
    pickAristocratById(collectableAristocratsIds[0])
    expectAristocratsPoints(ARISTOCRAT_VALUE)

    pickAristocratById(collectableAristocratsIds[1])
    expectAristocratsPoints(ARISTOCRAT_VALUE)
  })

  test('cannot pick uncollectable aristocrat', () => {
    pickAristocratById(uncollectableAristocratId)
    expectAristocratsPoints(0)
  })
})
