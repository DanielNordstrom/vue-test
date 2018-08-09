import Vue from 'vue'

export function postLogin (login) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000/login', login)
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export default {
  postLogin
}
