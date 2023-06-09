import { defineStore } from 'pinia'
import { ref } from 'vue'
import initState from '../presenter/initState'
import type { State } from '../types'

export const useComponentStore = (namespace: string) =>
  defineStore(namespace, () => {
    const state = ref(initState())
    function updateState(newState: State) {
      state.value = newState
    }

    return { state, updateState }
  })
