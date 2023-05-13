import { defineStore } from 'pinia'
import { shallowRef } from 'vue'
import initState from '../presenter/initState'
import { State } from '../types'

export const useMarketplaceStore = defineStore('marketplace', () => {
  const state = shallowRef(initState())
  function updateState(newState: State) {
    state.value = newState
  }

  return { state, updateState }
})
