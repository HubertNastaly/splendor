export const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export const toPascalCase = (value: string) => value.split('-').map(capitalize).join('')

export const printImport = (variables: string[], packageName: string) => `import { ${variables.join(', ')} } from '${packageName}'\n`
