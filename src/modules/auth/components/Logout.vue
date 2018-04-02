<template>
  <section>
    Wut?
    <div v-if='!this.loggedIn'>
      You are now logged out. <router-link to='/login'>Click here to login.</router-link>
    </div>
    <div v-else>
      still logged in for some reason...
    </div>
  </section>
</template>


<script>
import { createNamespacedHelpers } from 'vuex'

import actions from '../actions'
import getters from '../getters'

const namespace = 'auth'
const { mapActions, mapGetters } = createNamespacedHelpers(namespace)


export default {
  name: 'Logout',

  created() {
    console.log('loaded logout component')
    this.logout()
  },

  computed: { ...mapGetters(Object.keys(getters)) },
  methods: {...mapActions(Object.keys(actions)) }
}
</script>
