
import components from './components'

export const routes = [
  { path: '/login', component: components.LoginForm, props: true },
  { path: '/logout', component: components.Logout, props: true }
]

export default routes
