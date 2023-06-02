export interface History<T extends object> {
  past: T[]
  present: T
  future: T[]
}
