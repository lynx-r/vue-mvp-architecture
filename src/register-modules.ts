import router from './router'

const registerModule = (module) => {
  if (module.router) {
    module.router(router)
  }
}

export const registerModules = (modules) => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey]
    registerModule(module)
  })
}
