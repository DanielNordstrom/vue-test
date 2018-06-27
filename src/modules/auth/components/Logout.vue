<template>
  <section>
    Wut?
    {{ this.authStatus }}
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import actions from '../actions'
import getters from '../getters'
import { AUTH_LOGOUT } from '../types'

const namespace = 'auth'
const { mapActions, mapGetters } = createNamespacedHelpers(namespace)

export default {
  name: 'Logout',

  created () {
    console.log('loaded logout component')
    this.logout()
  },

  computed: {...mapGetters(Object.keys(getters))},
  methods: {
    ...mapActions(Object.keys(actions)),

    logout () {
      this.$store.dispatch('auth/' + AUTH_LOGOUT)
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>
