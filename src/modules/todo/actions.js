import todosApi from './api'
import types from './types'

export const actions = {
  [types.TODO_FETCH_ALL]: async ({ commit }) => {
    commit(types.TODO_SET_ALL, await todosApi.fetchTodos())
  },

  [types.TODO_CREATE]: async ({ commit }, todo) => {
    commit(types.TODO_APPEND, await todosApi.createTodo(todo))
  },

  [types.TODO_DELETE]: async ({ commit }, uri) => {
    await todosApi.deleteTodo(uri)
    commit(types.TODO_REMOVE, uri)
  }
}

export default actions
