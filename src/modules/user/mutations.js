import types from './types'

export const mutations = {
  [types.USER_SET_ALL]: (state, users) => {
    state.users = users
  },

  [types.USER_SET]: (state, user) => {
    state.user = user
  },

  [types.USER_APPEND]: (state, user) => {
    state.users.push(user)
  },

  [types.USER_CHANGE]: (state, user) => {
    const el = state.users.find(t => t.uri === user.uri)
    state.users.splice(state.users.indexOf(el), 1, user)
  },

  [types.USER_REMOVE]: (state, uri) => {
    const el = state.users.find(user => user.uri === uri)
    state.users.splice(state.users.indexOf(el), 1)
  }
}

export default mutations
