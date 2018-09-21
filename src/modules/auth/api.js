import Vue from 'vue'

export function postLogin (login) {
  return new Promise((resolve, reject) => {
    Vue.http.post('/api/login', login)
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export default {
  postLogin
}
