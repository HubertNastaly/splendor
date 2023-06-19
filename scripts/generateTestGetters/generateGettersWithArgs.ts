import fs from 'fs'
import { printImport, toPascalCase } from './utils'

const SOURCE_FILE_PATH = 'src/constants/testIds.ts'
const SIMPLE_TYPES = ['string', 'number']

interface GetterWithArgsEntry {
  propertyName: string,
  functionArguments: string,
  testId: string
}

const printGetterWithArgs = ({ propertyName, functionArguments, testId }: GetterWithArgsEntry) => `export const get${toPascalCase(propertyName)} = ${functionArguments} => screen.getByTestId(${testId})\n`

const printQueryWithArgs = ({ propertyName, functionArguments, testId }: GetterWithArgsEntry) => `export const query${toPascalCase(propertyName)} = ${functionArguments} => screen.queryByTestId(${testId})\n`

export function generateGettersWithArgs(stream: fs.WriteStream) {
  const gettersWithArgs = fs.readFileSync(SOURCE_FILE_PATH).toString().split('\n').filter(line => line.includes('=>'))

  const getterEntries: GetterWithArgsEntry[] = []
  const missingTypes: string[] = []

  for(const line of gettersWithArgs) {
    const entry = lineToGetterEntry(line)
    getterEntries.push(entry)

    const argumentTypes = retrieveArgumentsTypes(entry.functionArguments)
    argumentTypes.forEach(argumentType => {
      if(!SIMPLE_TYPES.includes(argumentType) && !missingTypes.includes(argumentType)) {
        missingTypes.push(argumentType)
      }
    })
  }

  missingTypes.forEach(missingType => stream.write(printImport(missingType, '@/types')))
  stream.write('\n')

  getterEntries.forEach(entry => {
    stream.write(printGetterWithArgs(entry))
    stream.write(printQueryWithArgs(entry))
    stream.write('\n')
  })
}

function lineToGetterEntry (line: string): GetterWithArgsEntry {
  const semicolonIndex = line.indexOf(':')
  const propertyName = line.slice(0, semicolonIndex).trimStart()
  const functionDeclaration = line.slice(semicolonIndex +1).trimStart().replace(',', '')
  const [functionArguments, testId] = functionDeclaration.split(' => ')

  return { propertyName, functionArguments, testId }
}

const retrieveArgumentsTypes = (argumentsString: string) => argumentsString
  .replaceAll(/[()]/g, '')
  .split(/[:,]/)
  .filter((_, index) => index % 2 === 1)
  .map(name => name.trimStart())
