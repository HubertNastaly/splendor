import { fireEvent } from '@testing-library/dom'
import { getAristocrat } from './getters'

export const pickAristocratById = (aristocratId: number) => fireEvent.click(getAristocrat(aristocratId))
