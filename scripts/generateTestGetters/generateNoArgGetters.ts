import fs from 'fs'
// TODO: resolve absolute path
// eslint-disable-next-line no-restricted-imports
import { testIds } from '../../src/constants'
import { toPascalCase } from './utils'

type TestIdKey = keyof typeof testIds

const printNoArgGetter = (testId: string) => `export const get${toPascalCase(testId)} = () => screen.getByTestId('${testId}')\n`
const printNoArgGetterWithin = (testId: string) => `export const get${toPascalCase(testId)}Within = (container: HTMLElement) => within(container).getByTestId('${testId}')\n`

const printNoArgQuery = (testId: string) => `export const query${toPascalCase(testId)} = () => screen.queryByTestId('${testId}')\n`
const printNoArgQueryWithin = (testId: string) => `export const query${toPascalCase(testId)}Within = (container: HTMLElement) => within(container).queryByTestId('${testId}')\n`

export function generateNoArgGetters(stream: fs.WriteStream) {
  const keys = Object.keys(testIds)
  for(const key of keys) {
    const testId = testIds[key as TestIdKey]

    if(typeof testId === 'string') {
      stream.write(printNoArgGetter(testId))
      stream.write(printNoArgGetterWithin(testId))
      stream.write(printNoArgQuery(testId))
      stream.write(printNoArgQueryWithin(testId))
      stream.write('\n')
    }
  }
}
