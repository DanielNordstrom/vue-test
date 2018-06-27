
export const getters = {

  getTodos: (state) => state.todos,

  getTodoById: (state, getters) => (id) => getters.getTodos.find(todo => todo.id === id),

  getTodosCount: (state, getters) => getters.getTodos.length
}

export default getters
