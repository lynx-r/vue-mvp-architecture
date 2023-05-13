import { reactive } from 'vue'
import initState from '../presenter/initState'
import type { State } from '../types'

const store = reactive({
  state: initState(),
  updateState(newState: State) {
    this.state = newState
  }
})

export function useMarketplaceStore() {
  return store
}
