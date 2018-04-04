import Vue from 'vue'

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    Vue.http.get('http://localhost:5000/users')
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function createUser(user) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000/users', user)
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function updateUser(uri, user) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000'+uri, user)
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function deleteUser(uri) {
  return new Promise((resolve, reject) => {
    Vue.http.delete('http://localhost:5000'+uri)
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export default {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser
}
