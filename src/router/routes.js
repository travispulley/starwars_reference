
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'movies', component: () => import('pages/Movies.vue') },
      { path: 'people', component: () => import('pages/People.vue') },
      { path: 'planets', component: () => import('pages/Planets.vue') },
      { path: 'species', component: () => import('pages/Species.vue') },
      { path: 'starships', component: () => import('pages/Starships.vue') },
      { path: 'vehicles', component: () => import('pages/Vehicles.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
