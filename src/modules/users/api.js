import Vue from 'vue'


const headers = {
  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjI0MjMzNDMsImlhdCI6MTUyMjMzNjkzOCwic3ViIjoyfQ.CC1QFLrEaOvlIe4IdcCCqcCMty34mjNpksc1QnZx-aI'
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
