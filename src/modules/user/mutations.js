
export const mutations = {
  setUsers (state, users) {
    state.users = users
  },

  setUser (state, user) {
    state.user = user
  },

  appendUser (state, user) {
    state.users.push(user)
  },

  changeUser (state, user) {
    const el = state.users.find(t => t.uri === user.uri)
    state.users.splice(state.users.indexOf(el), 1, user)
  },

  removeUser (state, uri) {
    const el = state.users.find(user => user.uri === uri)
    state.users.splice(state.users.indexOf(el), 1)
  }
}

export default mutations
