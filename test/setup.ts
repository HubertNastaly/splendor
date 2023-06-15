import '@testing-library/jest-dom'

jest.mock('@/constants/envConstants', () => ({
  MODE: 'test'
}))
