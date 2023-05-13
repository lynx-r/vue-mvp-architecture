import type { RouteRecordRaw, Router } from 'vue-router'
import someShopRoute from './pages/some-shop/router'

const Marketplaces = () => import('./pages/IndexPage.vue')

const moduleRoute: RouteRecordRaw = {
  path: '/marketplace',
  component: Marketplaces,
  children: [someShopRoute]
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
