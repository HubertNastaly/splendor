export type StateObject = object

export interface History<T extends StateObject> {
  past: T[]
  present: { state: T, undoable?: boolean }
  future: T[]
}
