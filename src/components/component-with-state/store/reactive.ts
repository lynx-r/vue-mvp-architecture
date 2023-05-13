import { reactive } from 'vue'
import initState from '../presenter/initState'
import type { State } from '../types'

export const useComponentStore = (_namespace: string) => () => {
  const store = reactive({
    state: initState(),
    updateState(newState: State) {
      this.state = newState
    }
  })
  return store
}
