import types from './types'

export const mutations = {

  [types.AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },

  [types.AUTH_SUCCESS]: (state, token) => {
    state.status = 'success'
    state.token = token
  },

  [types.AUTH_ERROR]: (state, message) => {
    state.status = 'error'
    state.message = message
  },

  [types.AUTH_LOGOUT]: (state) => {
    state.status = ''
  }
}

export default mutations
