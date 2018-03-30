import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'

import store from './store'
import router from './router'


Vue.config.productionTip = false

// Uses $http
Vue.use(VueResource)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
