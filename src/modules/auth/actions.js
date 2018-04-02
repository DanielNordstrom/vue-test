import loginApi from './api'


export const actions = {
  doLogin: async ({ commit }, credentials) => {
    commit('setToken', await loginApi.postLogin(credentials).then(res => res.token))
  },

  logout: ({ commit }) => {
    console.log('logout action called')
    commit('setToken', null)
  }
}


export default actions
