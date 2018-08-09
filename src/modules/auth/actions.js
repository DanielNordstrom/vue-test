import Vue from 'vue'
import loginApi from './api'
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT, USER_REQUEST } from './types'

export const actions = {

  [AUTH_REQUEST]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      loginApi.postLogin(user)
        .then(resp => {
          const token = resp.token
          localStorage.setItem('auth-token', token)
          Vue.http.headers.common.Authorization = `Bearer ${token}`
          commit(AUTH_SUCCESS, token)
          // dispatch(USER_REQUEST)
          console.log('dispatch USER_REQUEST to load user for login email')
          resolve(resp)
        })
        .catch(err => {
          commit(AUTH_ERROR, err)
          localStorage.removeItem('auth-token')
          reject(err)
        })
    })
  },

  [AUTH_LOGOUT]: ({ commit }) => {
    console.log('AUTH_LOGOUT action called')
    return new Promise((resolve) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem('auth-token')
      delete Vue.http.headers.common.Authorization
      resolve()
    })
  },

  [USER_REQUEST]: ({ commit }) => {
    console.log(commit)
  }
}

export default actions
