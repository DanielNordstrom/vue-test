
export const getters = {

  getToken: (state) => state.token,

  loggedIn: (state) => (state.token) ? true : false

}

export default getters
