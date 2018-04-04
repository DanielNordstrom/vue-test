import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'

import store from './store'
import router from './router'

//import auth from './modules/auth'

//import MyPlugin from './modules/auth/plugin'
//Vue.use(MyPlugin, {other:'stuff'})

Vue.config.productionTip = false

// Uses $http
Vue.use(VueResource)


const token = localStorage.getItem('auth-token')
if (token) {
  Vue.http.headers.common.Authorization = `Bearer ${token}`
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
