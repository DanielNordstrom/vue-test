import Vue from 'vue'

export function fetchUsers () {
  return new Promise((resolve, reject) => {
    Vue.http.get('/api/users')
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function fetchUser (id) {
  return new Promise((resolve, reject) => {
    Vue.http.get(`/api/users/${id}`)
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function createUser (user) {
  return new Promise((resolve, reject) => {
    Vue.http.post('/api/users', user)
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function updateUser (uri, user) {
  return new Promise((resolve, reject) => {
    Vue.http.put('/api' + uri, user)
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function deleteUser (uri) {
  return new Promise((resolve, reject) => {
    Vue.http.delete('/api' + uri)
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export default {
  fetchUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser
}
