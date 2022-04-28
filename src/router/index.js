import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Nosotros from '../components/Nosotros.vue'
import Servicios from '../components/Servicios.vue'
import Contacto from '../components/Contacto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },   
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
