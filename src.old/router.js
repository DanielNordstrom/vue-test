import Vue from 'vue'
//import VueRouter from 'vue-router'
import Router from 'vue-router'

import PageNotFound from './errors/PageNotFound'

import todo from './modules/todo'
import user from './modules/user'
import auth from './modules/auth'

//Vue.use(VueRouter)
Vue.use(Router)


//export const router = new VueRouter({
export const router = new Router({
//  mode: 'history',
//  base: __dirname,
  routes: [
    ...todo.routes,
    { path: '/users', component: user.components.User, children: [
      ...user.routes,
    ]},
    ...auth.routes,
    { path:'*', component: PageNotFound }
  ]
})

export default router
