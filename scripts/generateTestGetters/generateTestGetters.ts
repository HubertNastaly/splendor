import fs from 'fs'
import { printImport } from './utils'
import { generateGettersWithArgs } from './generateGettersWithArgs'
import { generateNoArgGetters } from './generateNoArgGetters'

const OUTPUT_FILE_PATH = 'test/utils/getters.ts'
const WARNING = '// WARNING: This file is generated. Do not modify it manually.\n'

export function generateTestGetters() {
  const stream = fs.createWriteStream(OUTPUT_FILE_PATH)

  stream.write(WARNING)
  stream.write('\n')
  stream.write(printImport(['screen', 'within'], '@testing-library/react'))

  generateGettersWithArgs(stream)
  generateNoArgGetters(stream)

  stream.close()
}
