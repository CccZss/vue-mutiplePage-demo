const routes = [
  {
    path: '/first.html',
    meta: {
      title: 'Two'
    },
    component: require('../components/Two.vue')
  },
  {
    name: 'two',
    path: '/two/:userId',
    meta: {
      title: 'Two'
    },
    component: require('../components/Two.vue')
  },
  {
    name: 'three',
    path: '/three',
    meta: {
      title: 'Three',
      requiresAuth: true,
    },
    component: require('../components/Three.vue'),
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