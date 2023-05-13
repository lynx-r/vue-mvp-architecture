import { Router } from 'vue-router'

const Marketplaces = () => import('./pages/Index.vue')

const moduleRoute = {
  path: '/marketplace',
  component: Marketplaces
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
