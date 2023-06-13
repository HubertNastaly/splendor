import { COLLECTABLE_ARISTOCRAT_IDS, UNCOLLECTABLE_ARISTOCRAT_ID, mockCollectableAristocratState } from '@/mocks'
import { toHistory } from '@/utils'
import { ARISTOCRAT_VALUE } from '@/constants'
import { expectAristocratsPoints, renderGame, pickAristocratById } from './utils'

describe('aristocrats', () => {
  const state = toHistory(mockCollectableAristocratState())

  beforeEach(() => renderGame(state))

  test.todo('apply special styles when collectable')

  test('can pick aristocrat when collectable', () => {
    pickAristocratById(COLLECTABLE_ARISTOCRAT_IDS[0])
    expectAristocratsPoints(ARISTOCRAT_VALUE)
  })

  test('cannot pick two collectable aristocrats in one round', () => {
    pickAristocratById(COLLECTABLE_ARISTOCRAT_IDS[0])
    expectAristocratsPoints(ARISTOCRAT_VALUE)

    pickAristocratById(COLLECTABLE_ARISTOCRAT_IDS[1])
    expectAristocratsPoints(ARISTOCRAT_VALUE)
  })

  test('cannot pick uncollectable aristocrat', () => {
    pickAristocratById(UNCOLLECTABLE_ARISTOCRAT_ID)
    expectAristocratsPoints(0)
  })
})
