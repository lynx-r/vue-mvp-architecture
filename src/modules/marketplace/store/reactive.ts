import type { UpdatableState } from '@/core/UpdatableState'
import { reactive } from 'vue'
import initState from '../presenter/initState'
import type { State } from '../types'

const store: UpdatableState<State> = reactive({
  state: initState(),
  updateState(newState: State) {
    this.state = newState
  },
  resetState() {
    this.state = initState()
  }
})

export function useMarketplaceStore() {
  return store
}
