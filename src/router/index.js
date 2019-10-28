import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion.vue'
import Questionnaire from '../views/Questionnaire.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'connexion',
    component: Connexion
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: Questionnaire,
    props: true
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'about',
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
