const Marketplaces = () => import('./pages/Index.vue');

const moduleRoute = {
  path: '/marketplaces',
  component: Marketplaces,
};

export default (router) => {
  router.addRoutes([moduleRoute]);
};
