import type { Router } from 'vue-router'

export interface Module {
  router: (router: Router) => void
}

export type ModuleRecord = Record<string, Module>
