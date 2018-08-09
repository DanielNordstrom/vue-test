import store from '../../store'
import components from './components'

export const requireAuthentication = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

/*
const ifNotAuthenticated = (to, from, next) => {
  console.log('ifNotAuthenticated:', store.getters['auth/isAuthenticated'])
  if (!store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/')
}
*/

export const routes = [
  {
    path: '/login',
    component: components.LoginForm,
    props: true
  },
  {
    path: '/logout',
    component: components.Logout,
    props: true,
    beforeEnter: requireAuthentication
  }
]

export default routes
