<template>
  <section>
    <div v-if='this.loggedIn'>
      You are logged in. <router-link to='/logout'>Click here to logout.</router-link>
    </div>
    <div v-else class='login-form-wrapper'>
      <fieldset>
        <legend>Login</legend>
        <form class='login-form'>
          <div class='form-element'>
            <label for='email'>Email:</label>
            <input type='text' name='email' v-model='email' />
          </div>
          <div class='form-element'>
            <label for='password'>Password</label>
            <input type='password' name='password' v-model='password' />
          </div>
          <button @click.stop.prevent='submitLogin'>Login</button>
          <button @click.stop.prevent='createAccount'>Create Account</button>
          <div>
            Token: {{ this.getToken }}
          </div>
          <div v-if='this.loggedIn'>
            You are logged in.
            {{ this.loggedIn }}
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

const namespace = 'auth'
const { mapActions, mapGetters } = createNamespacedHelpers(namespace)


export default {
  name: 'LoginForm',

  data() {
    return {
      email: '',
      password: ''
    }
  },

  computed: { ...mapGetters(Object.keys(getters)) },
  methods: {
    ...mapActions(Object.keys(actions)),

    submitLogin() {
      let payload = {
        email: this.email,
        password: this.password
      }
      this.doLogin(payload)
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
