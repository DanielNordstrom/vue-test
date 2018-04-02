import Vue from 'vue'
import api_key from '@/api_key'

const headers = {
  'Authorization': `Bearer ${api_key}`
}


export function fetchUsers() {
  return new Promise((resolve, reject) => {
    Vue.http.get('http://localhost:5000/users', {
      headers
    })
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function createUser(user) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000/users', user, {
      headers
    })
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function updateUser(uri, user) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000'+uri, user, {
      headers
    })
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function deleteUser(uri) {
  return new Promise((resolve, reject) => {
    Vue.http.delete('http://localhost:5000'+uri, {
      headers
    })
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export default {
  fetchUsers: fetchUsers,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}
