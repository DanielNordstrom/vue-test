import usersApi from './api'
import types from './types'

export const actions = {
  [types.USER_FETCH_ALL]: async ({ commit }) => {
    commit(types.USER_SET_ALL, await usersApi.fetchUsers())
  },

  [types.USER_FETCH]: async ({ commit }, id) => {
    commit(types.USER_SET, await usersApi.fetchUser(id))
  },

  [types.USER_CREATE]: async ({ commit }, user) => {
    commit(types.USER_APPEND, await usersApi.createUser(user))
  },

  [types.USER_UPDATE]: async ({ commit }, user) => {
    commit(types.USER_CHANGE, await usersApi.updateUser(user))
  },

  [types.USER_DELETE]: async ({ commit }, uri) => {
    await usersApi.deleteUser(uri)
    commit(types.USER_REMOVE, uri)
  }
}

export default actions
