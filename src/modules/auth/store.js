import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import { authPlugin } from './plugins'


export const store = {
  namespaced: true,

  state: {
    token: null
  },

  plugins: [authPlugin],

  mutations,
  actions,
  getters
}


export default store
