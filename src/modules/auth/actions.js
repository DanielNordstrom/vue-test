import Vue from 'vue'
import loginApi from './api'
import types from './types'

import userApi from '../user/api'

export const actions = {

  [types.AUTH_REQUEST]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit(types.AUTH_REQUEST)
      loginApi.postLogin(user)
        .then(resp => {
          const token = resp.token
          localStorage.setItem('auth-token', token)
          Vue.http.headers.common.Authorization = `Bearer ${token}`
          commit(types.AUTH_SUCCESS, token)
          resolve(resp)
        })
        .catch(err => {
          commit(types.AUTH_ERROR, err)
          localStorage.removeItem('auth-token')
          reject(err)
        })
    })
  },

  [types.AUTH_LOGOUT]: ({ commit }) => {
    // console.log('types.AUTH_LOGOUT action called')
    return new Promise((resolve) => {
      commit(types.AUTH_LOGOUT)
      localStorage.removeItem('auth-token')
      delete Vue.http.headers.common.Authorization
      resolve()
    })
  },

  [types.USER_REQUEST]: async ({ commit }, id) => {
    return new Promise((resolve) => {
      userApi.fetchUser(id)
        .then(resp => {
          commit(types.USER_REQUEST, resp)
        })
        .then(() => resolve)
    })
  }
}

export default actions
