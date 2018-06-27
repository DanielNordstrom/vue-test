
export const mutations = {
  setTodos(state, todos) {
    state.todos = todos
  },

  appendTodo(state, todo) {
    state.todos.push(todo)
  },

  changeTodo(state, todo) {
    const el = state.todos.find(t => t.uri == todo.uri)
    state.todos.splice(state.todos.indexOf(el), 1, todo)
  },

  removeTodo(state, uri) {
    const el = state.todos.find(todo => todo.uri == uri)
    state.todos.splice(state.todos.indexOf(el), 1)
  },
}

export default mutations
