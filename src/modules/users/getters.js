
export const getters = {

  getUsers: (state) => state.users,

  getUserById: (state, getters) => (id) => getters.getUsers.find(user => user.id === id),

  getUsersCount: (state, getters) => getters.getUsers.length
}

export default getters
