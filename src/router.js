import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Section from './views/Section.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/subject/:name',
      name: 'subject',
      component: Section
    }
  ]
})
