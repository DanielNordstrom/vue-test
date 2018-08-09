import components from './components'
// import auth from '../auth'

const loadSavedToken = (Vue) => {
  const token = localStorage.getItem('auth-token')
  if (token) {
    Vue.http.headers.common.Authorization = `Bearer ${token}`
  }
}

// This is your plugin object. It can be exported to be used anywhere.
export const MyPlugin = {
  // The install method is all that needs to exist on a plugin object
  // It takes the global Vue object as well as user-defined options.
//  install(Vue, { store }) {
//    if (!store) {
//      throw new Error('Please provide vuex store.')
//    }
  install (Vue) {
    loadSavedToken(Vue)

    Vue.component(components.LoginForm.name, components.LoginForm)
    Vue.component(components.Logout.name, components.Logout)

    //    store.registerModule('auth', authStore)
    Vue.prototype.$auth = {
      isAuthenticated () {
        return Vue.$store.auth.getters.isAuthenticated
      }
    }

    // We call Vue.mixin() here to inject functionality into all components
    Vue.mixin({
      // Anything added to a mixin will be injected into all components
      // In this case, the mounted() method runs when the components is added
      mounted () {
        console.log('Mounted!')
      }
    })
  }
}

export default MyPlugin

/*
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}
*/
