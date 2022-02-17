import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('../views/Other.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
