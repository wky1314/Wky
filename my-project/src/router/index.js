import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/Movie'
import Cinema from '@/views/Cinema'
import Zoom from '@/views/Zoom'
import Login from '@/views/Login'
import Page from '@/views/Page'
import CinemaPage from '@/views/CinemaPage'
import Ticket from '@/views/Ticket'
import User from '@/views/User'
Vue.use(Router)
let newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/cinema',
      name: 'Cinema',
      component: Cinema
    },
    {
      path: '/login',
      name: ' Login',
      component: Login
    },
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/page/:movie_id',
      name: 'Page',
      component: Page
    },
    {
      path: '/cinemaPage',
      name: 'CinemaPage',
      component: CinemaPage
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/ticket',
      name:'Ticket',
      component: Ticket
    }
  ]
})
newRouter.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  if (to.meta.isLogin && !userInfo) {
    window.localStorage.setItem('toPath', to.path)
    next('login')
  } else {
    next()
  }
})

export default newRouter
