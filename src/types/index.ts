import type { Router } from 'vue-router'
import type { Store } from 'vuex'

export interface Module {
  router: (router: Router) => void
  store?: Store<any>
}

export type ModuleRecord = Record<string, Module>
