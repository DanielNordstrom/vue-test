import Vue from 'vue'

export function fetchTodos () {
  return new Promise((resolve, reject) => {
    Vue.http.get('/api/todos')
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function createTodo (todo) {
  return new Promise((resolve, reject) => {
    Vue.http.post('/api/todos', todo)
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function updateTodo (uri, todo) {
  return new Promise((resolve, reject) => {
    Vue.http.post('/api' + uri, todo)
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function deleteTodo (uri) {
  return new Promise((resolve, reject) => {
    Vue.http.delete('/api' + uri)
      .then(response => { resolve(response.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export default {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo
}
