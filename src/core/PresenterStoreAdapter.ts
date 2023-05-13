import { UpdatableState } from './UpdatableState'

export class PresenterStoreAdapter<T> {
  constructor(private store: UpdatableState<T>) {}

  get state() {
    return this.store.state
  }

  updateState(newState: Partial<T> | T[keyof T]) {
    this.store.updateState({ ...this.state, ...newState })
  }

  resetState() {
    // TODO fix typecast
    this.store.updateState({} as T)
  }
}
