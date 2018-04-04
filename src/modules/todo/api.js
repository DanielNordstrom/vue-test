import Vue from 'vue'


export function fetchTodos() {
  return new Promise((resolve, reject) => {
    Vue.http.get('http://localhost:5000/todos')
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function createTodo(todo) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000/todos', todo)
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function updateTodo(uri, todo) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000'+uri, todo)
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function deleteTodo(uri) {
  return new Promise((resolve, reject) => {
    Vue.http.delete('http://localhost:5000'+uri)
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
