
const routes = [
  {
    path: '/index.html',
    meta: {
      title: 'Home'
    },
    component: require('components/demo/Home.vue')
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      title: 'Home'
    },
    component: require('components/demo/Home.vue')
  },
  {
    name: 'one',
    path: '/one',
    meta: {
      title: 'One',
      requiresAuth: true,
    },
    component: require('components/demo/One.vue'),
  },
  {
    path: '*',
    meta: {
      title: '404'
    },
    component: require('components/demo/404.vue'),
  },
]

export default routes
