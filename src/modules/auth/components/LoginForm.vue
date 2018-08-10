<template>
  <section>
    <div class='login-form-wrapper'>
      <fieldset>
        <legend>Login</legend>
        <form class='login-form' @submit.prevent='login'>
          <div class='form-element'>
            <label for='email'>Email:</label>
            <input type='text' name='email' v-model='email' />
          </div>
          <div class='form-element'>
            <label for='password'>Password</label>
            <input type='password' name='password' v-model='password' />
          </div>
          <button type='submit'>Login</button>
          <button @click.stop.prevent='createAccount'>Create Account</button>
          <div v-if='this.authorizationFailed'>
            Invalid username or password.
          </div>
          <div class='debug' v-if='this.debug'>
            <div>
              Status: {{ this.authStatus }}
            </div>
            <div>
              Message: {{ this.authMessage }}
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import actions from '../actions'
import getters from '../getters'
import types from '../types'

const namespace = 'auth'
const { mapActions, mapGetters } = createNamespacedHelpers(namespace)

export default {
  name: 'LoginForm',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  computed: { ...mapGetters(Object.keys(getters)) },
  methods: {
    ...mapActions(Object.keys(actions)),

    login () {
      const { email, password } = this
      this.$store.dispatch('auth/' + types.AUTH_REQUEST, { email, password })
        .then(resp => {
          this.$store.dispatch('auth/' + types.USER_REQUEST, resp.user_id)
        })
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped>
.login-form-wrapper {
  text-align: left;
}

.form-element {
  margin: 10px 0;
}

label {
}
</style>
