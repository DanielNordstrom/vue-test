<template>
  <div class='user-form-wrapper'>
    <fieldset>
      <legend>Create User</legend>
      <form class='user-form'>
        <div class='form-element'>
          <label for='email'>Email</label>
          <input type='text' name='email' v-model='email' />
        </div>
        <div class='form-element'>
          <label for='password'>Password</label>
          <input type='password' name='password' v-model='password'>
        </div>
        <div class='form-element'>
          <label for='verify_password'>Verify Password</label>
          <input type='password' name='verify_password' v-model='verify_password'>
        </div>
        <div class='form-element'>
          <label for='firstname'>First Name</label>
          <input type='text' name='firstname' v-model='firstname'>
        </div>
        <div class='form-element'>
          <label for='lastname'>Last Name</label>
          <input type='text' name='lastname' v-model='lastname'>
        </div>
        <button @click.stop.prevent='postUser'>Create</button>
      </form>
      <div>
        {{ this.state.user.email }}
      </div>
    </fieldset>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import actions from '../actions'

const namespace = 'user'
const { mapActions } = createNamespacedHelpers(namespace)

export default {
  name: 'UserForm',

  data () {
    return {
      email: '',
      password: '',
      verify_password: '',
      firstname: '',
      lastname: '',
      admin: false
    }
  },

  created () {
    const id = this.$route.params.id
    if (id) {
      console.log('User ID:', id)
      this.fetchUser(id)
    }
  },

  methods: {
    ...mapActions(Object.keys(actions)),

    postUser () {
      if (this.password !== this.verify_password) {
        console.error('Passwords do not match!')
        return
      }

      let payload = {
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        admin: this.admin
      }
      this.createUser(payload)
    }
  }
}
</script>

<style scoped>
.user-form-wrapper {
  text-align: left;
}

.form-element {
  margin: 10px 0;
}

label {
  display: inline-block;
}
</style>
