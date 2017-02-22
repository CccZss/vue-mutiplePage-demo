const routes = [
  {
    path: '/index.html',
    meta: {
      title: 'Home'
    },
    component: require('../components/Home.vue')
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      title: 'Home'
    },
    component: require('../components/Home.vue')
  },
  {
    name: 'one',
    path: '/one',
    meta: {
      title: 'One',
      requiresAuth: true,
    },
    component: require('../components/One.vue'),
  },
  {
    path: '*',
    meta: {
      title: '404'
    },
    component: require('components/demo/404.vue'),
  },
]

module.exports = routes