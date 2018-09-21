
export const getters = {

  debug: () => false,
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  authMessage: state => state.message,
  authorizationFailed: state => (state.status === 'error' &&
                                 state.message === 'UNAUTHORIZED')

}

export default getters
