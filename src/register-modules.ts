import router from './router'
import vuexStore from './stores/vuex'
import type { Module, ModuleRecord } from './types'

const registerModule = (name: string, module: Module) => {
  if (module.store) {
    vuexStore.registerModule(name, module.store)
  }
  if (module.router) {
    module.router(router)
  }
}

export const registerModules = (modules: ModuleRecord) => {
  Object.entries(modules).forEach(([moduleKey, moduleValue]) => {
    registerModule(moduleKey, moduleValue)
  })
}
