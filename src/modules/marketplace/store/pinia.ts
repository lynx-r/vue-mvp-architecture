import { defineStore } from 'pinia'
import { ref } from 'vue'
import initState from '../presenter/initState'
import type { State } from '../types'

export const useMarketplaceStore = defineStore('marketplace', () => {
  const state = ref(initState())
  function updateState(newState: State) {
    state.value = newState
  }

  return { state, updateState }
})
