import Vue from 'vue'
import VueRouter from 'vue-router'
import Connexion from '../views/Connexion.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Accueil from '../views/Accueil.vue'

Vue.use(VueRouter)
// Mise en place des différente route de l'application
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
    path: '/accueil',
    name: 'accueil',
    component: Accueil,
    props: true,
    meta: {
      title: 'Home Page - Example App'
    }
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
