import Vue from 'vue'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

import App from './App.vue'

import store from './store'
import router from './router'

import auth from './modules/auth'


Vue.config.productionTip = false

// Uses $http
Vue.use(VueResource)

Vue.use(auth.plugin)


sync(store, router)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
