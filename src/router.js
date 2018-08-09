import Vue from 'vue'
import VueRouter from 'vue-router'

import PageNotFound from './errors/PageNotFound'

import todo from './modules/todo'
import user from './modules/user'
import auth from './modules/auth'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    ...todo.routes,
    {
      path: '/users',
      component: user.components.User,
      children: [ ...user.routes ]
    },
    ...auth.routes,
    { path: '*', component: PageNotFound }
  ]
})

export default router
