import Vue from 'vue'
import VueRouter from 'vue-router'

import todos from './modules/todos'
import users from './modules/users'

Vue.use(VueRouter)


export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  ...todos.routes,
  ...users.routes
})

export default router
