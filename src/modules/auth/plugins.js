




export const authPlugin = store => {
  // called when the store is initialized
  console.log('authPlugin initialization')
  let token = localStorage.getItem('auth.store')
  console.log('token:', token)
  if (token) {
    store.commit('auth/setToken', token)
    console.log('token found:', token)
  }
  store.subscribe((mutation, state) => {
    // called after every mutation
    // The mutation comes in the format of { type, payload }
    if (mutation.type === 'auth/setToken'
        && mutation.payload != null
        && mutation.payload.length) {
      localStorage.setItem('auth.store', mutation.payload)
    }
    console.log('mutation:', mutation)
    console.log('store:', store)
  })
}


export default [
  authPlugin
]
