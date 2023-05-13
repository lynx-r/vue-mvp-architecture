import router from './router'
import type { Module, ModuleRecord } from './types'

const registerModule = (module: Module) => {
  if (module.router) {
    module.router(router)
  }
}

export const registerModules = (modules: ModuleRecord) => {
  Object.entries(modules).forEach(([_moduleKey, moduleValue]) => {
    registerModule(moduleValue)
  })
}
