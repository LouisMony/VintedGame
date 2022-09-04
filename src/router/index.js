import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import JoinView from '../views/JoinView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rejoindre-une-partie',
    name: 'rejoindre-une-partie',
    component: JoinView
  },
  {
    path: '/creer-une-partie',
    name: 'creer-une-partie',
    component: CreateView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
