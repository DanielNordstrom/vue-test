import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from './errors/PageNotFound'
import Home from './pages/Home'

import todo from './modules/todo'
import user from './modules/user'
import auth from './modules/auth'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/',
      component: Home
    },
    ...todo.routes,
    { path: '/users',
      component: user.components.User,
      children: [ ...user.routes ]
    },
    ...auth.routes,
    { path: '*', component: PageNotFound }
  ]
})

export default router
