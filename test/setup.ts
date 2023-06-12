import '@testing-library/jest-dom'

jest.mock('@/envConstants', () => ({
  MODE: 'test'
}))
