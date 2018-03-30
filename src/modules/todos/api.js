import Vue from 'vue'


const headers = {
  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjI0MjMzNDMsImlhdCI6MTUyMjMzNjkzOCwic3ViIjoyfQ.CC1QFLrEaOvlIe4IdcCCqcCMty34mjNpksc1QnZx-aI'
}


export function fetchTodos() {
  return new Promise((resolve, reject) => {
    Vue.http.get('http://localhost:5000/todos', {
      headers
    })
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function createTodo(todo) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000/todos', todo, {
      headers
    })
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function updateTodo(uri, todo) {
  return new Promise((resolve, reject) => {
    Vue.http.post('http://localhost:5000'+uri, todo, {
      headers
    })
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export function deleteTodo(uri) {
  return new Promise((resolve, reject) => {
    Vue.http.delete('http://localhost:5000'+uri, {
      headers
    })
    .then(response => { resolve(response.data) })
    .catch(error => { reject(error.statusText) })
  })
}


export default {
  fetchTodos: fetchTodos,
  createTodo: createTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo
}
