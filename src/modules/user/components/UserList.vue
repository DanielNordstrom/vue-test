<template>
  <div>
    <h2>UserList</h2>

    <div class='user-list-wrapper'>
      <ul v-if='this.getUsersCount' class='user-list'>
        <li v-for='user in this.getUsers' v-bind:key='user.uri'>
          <UserItem v-bind='user' />
          <div>
            URI: {{ user.uri }}
          </div>
          <button @click='deleteUser(user.uri)'>Delete</button>
        </li>
      </ul>
      <div v-if='!this.getUsersCount' class='user-none'>
        There are no users.
      </div>
    </div>

    <hr />
    <UserForm />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import UserItem from './UserItem'
import UserForm from './UserForm'

import getters from '../getters'
import actions from '../actions'

import types from '../types'

const { mapActions, mapGetters } = createNamespacedHelpers(types.NAMESPACE)

export default {
  name: 'UserList',

  data () {
    return {
      loading: true,
      error: null
    }
  },

  components: {
    UserItem,
    UserForm
  },

  computed: { ...mapGetters(Object.keys(getters)) },
  methods: {
    ...mapActions(Object.keys(actions)),

    deleteUser (uri) {
      this.$store.dispatch(types.NAMESPACE + '/' + types.USER_DELETE, uri)
    }
  },

  created () {
    // console.log('auth test:', this.$auth.isAuthenticated())
    this.$store.dispatch(types.NAMESPACE + '/' + types.USER_FETCH_ALL)
      .then(() => (this.loading = false))
    // this.fetchUsers().then(() => (this.loading = false))
  }
}
</script>
