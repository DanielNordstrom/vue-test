import usersApi from './api'


export const actions = {
  fetchUsers: async ({ commit }) => {
    commit('setUsers', await usersApi.fetchUsers())
  },

  createUser: async ({ commit }, user) => {
    commit('appendUser', await usersApi.createUser(user))
  },

  deleteUser: async ({ commit }, uri) => {
    await usersApi.deleteUser(uri)
    commit('removeUser', uri)
  }
}


export default actions