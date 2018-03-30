
import components from './components'

export const routes = [
  { path: '/users', component: components.UserList, props: true },
  { path: '/users:id', component: components.UserForm, props: true }
]


export default routes
