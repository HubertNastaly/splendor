import fs from 'fs'
// TODO: resolve absolute path
import { testIds } from '@/constants'
import { toPascalCase } from './utils'

type TestIdKey = keyof typeof testIds

const printNoArgGetter = (testId: string) => `export const get${toPascalCase(testId)} = () => screen.getByTestId('${testId}')\n`

const printNoArgQuery = (testId: string) => `export const query${toPascalCase(testId)} = () => screen.queryByTestId('${testId}')\n`

export function generateNoArgGetters(stream: fs.WriteStream) {
  const keys = Object.keys(testIds)
  for(const key of keys) {
    const testId = testIds[key as TestIdKey]

    if(typeof testId === 'string') {
      stream.write(printNoArgGetter(testId))
      stream.write(printNoArgQuery(testId))
      stream.write('\n')
    }
  }
}
