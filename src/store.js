import Vue from 'vue'
import Vuex from 'vuex'

import todo from './modules/todo'
import user from './modules/user'
import auth from './modules/auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,

  modules: {
    todo: todo.store,
    user: user.store,
    auth: auth.store
  }
})

export default store
