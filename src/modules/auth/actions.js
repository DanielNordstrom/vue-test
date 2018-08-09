import Vue from 'vue'
import loginApi from './api'
import types from './types'

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
          // this.$store.dispatch(USER_REQUEST)
          // Vue.store.dispatch(types.USER_REQUEST)
          console.log('dispatch USER_REQUEST to load user for login email')
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
    console.log('types.AUTH_LOGOUT action called')
    return new Promise((resolve) => {
      commit(types.AUTH_LOGOUT)
      localStorage.removeItem('auth-token')
      delete Vue.http.headers.common.Authorization
      resolve()
    })
  },

  [types.USER_REQUEST]: ({ commit }) => {
    console.log(commit)
  }
}

export default actions
