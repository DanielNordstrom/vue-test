import Vue from 'vue'
import api_key from '@/api_key'

const headers = {
  'Authorization': `Bearer ${api_key}`
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
