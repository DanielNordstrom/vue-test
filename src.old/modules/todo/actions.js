import todosApi from './api'


export const actions = {
  fetchTodos: async ({ commit }) => {
    commit('setTodos', await todosApi.fetchTodos())
  },

  createTodo: async ({ commit }, todo) => {
    commit('appendTodo', await todosApi.createTodo(todo))
  },

  deleteTodo: async ({ commit }, uri) => {
    await todosApi.deleteTodo(uri)
    commit('removeTodo', uri)
  }
}


export default actions
