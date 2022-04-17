import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import ResultsSearch from '../views/ResultsSearch.vue'
import AllFilms from '../views/AllFilms.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/films',
    name: 'Filmes',
    component: AllFilms
  },
  {
    path: '/details/:id',
    name: 'details',
    component: Details
  },
  {
    path: '/search/movie',
    name: 'search',
    component: ResultsSearch
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
