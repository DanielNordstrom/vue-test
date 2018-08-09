import usersApi from './api'
import types from './types'

export const actions = {
  fetchUsers: async ({ commit }) => {
    commit(types.USER_SET_ALL, await usersApi.fetchUsers())
  },

  fetchUser: async ({ commit }, id) => {
    commit(types.USER_SET, await usersApi.fetchUser(id))
  },

  createUser: async ({ commit }, user) => {
    commit(types.USER_APPEND, await usersApi.createUser(user))
  },

  deleteUser: async ({ commit }, uri) => {
    await usersApi.deleteUser(uri)
    commit(types.USER_REMOVE, uri)
  }
}

export default actions
