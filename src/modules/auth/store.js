import getters from './getters'
import actions from './actions'
import mutations from './mutations'


export const store = {
  namespaced: true,

  state() {
    return {
      current_user: false,
      token: localStorage.getItem('auth-token') || '',
      status: '',
      message: ''
    }
  },

  mutations,
  actions,
  getters
}


export default store
