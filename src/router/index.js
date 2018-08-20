import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import AboutPage from '@/views/AboutPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
      }
  ]
})