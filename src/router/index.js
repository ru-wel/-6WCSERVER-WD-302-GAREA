import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/properties',
    name: 'properties',
    component: () => import('../components/Properties.vue')
  },
  {
    path: '/createProperties',
    name: 'createProperties',
    component: () => import('../components/CreateProperties.vue')
  },
  {
    path: '/viewProperties',
    name: 'viewProperties',
    component: () => import('../components/ViewProperties.vue')
  },
  {
    path: '/editProperties',
    name: 'editProperties',
    component: () => import('../components/EditProperties.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
