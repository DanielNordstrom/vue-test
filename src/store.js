import Vue from 'vue'
import Vuex from 'vuex'

import todo from './modules/todo'
import user from './modules/user'
import auth from './modules/auth'

import MyPlugin from './modules/auth/plugin'


Vue.use(Vuex)


export const store = new Vuex.Store({
  strict: true,

  modules: {
    todo: todo.store,
    user: user.store,
    auth: auth.store
  }
})


console.log(store)
Vue.use(MyPlugin, { store })


export default store
