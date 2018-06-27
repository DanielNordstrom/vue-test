
import components from './components'

export const routes = [
  {
    path: '',
    component: components.UserList,
    props: true
  },
  {
    path: ':id',
    component: components.UserForm,
    props: true
  }
]


export default routes
