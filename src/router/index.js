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
    path: '/addProperties',
    name: 'addProperties',
    component: () => import('../components/AddProperties.vue')
  },
  {
    path: '/viewProperties',
    name: 'viewProperties',
    component: () => import('../components/ViewProperties.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditProperties.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
