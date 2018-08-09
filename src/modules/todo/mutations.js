import types from './types'

export const mutations = {
  [types.TODO_SET_ALL]: (state, todos) => {
    state.todos = todos
  },

  [types.TODO_APPEND]: (state, todo) => {
    state.todos.push(todo)
  },

  [types.TODO_CHANGE]: (state, todo) => {
    const el = state.todos.find(t => t.uri === todo.uri)
    state.todos.splice(state.todos.indexOf(el), 1, todo)
  },

  [types.TODO_REMOVE]: (state, uri) => {
    const el = state.todos.find(todo => todo.uri === uri)
    state.todos.splice(state.todos.indexOf(el), 1)
  }
}

export default mutations
