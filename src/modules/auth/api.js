import Vue from 'vue'

const headers = {
  'Content-Type': 'application/json'
}

export function postLogin(login) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000/login', login, {
      headers
    })
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}

export default {
  postLogin: postLogin
}
