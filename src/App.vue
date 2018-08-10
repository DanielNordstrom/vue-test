<template>
  <div id="app">
    <header>
        <div v-if="this.$store.state.auth.current_user">
          Logged in as: {{ this.$store.state.auth.current_user.firstname }}
        </div>
        <div v-else>
          Please login.
        </div>
    </header>

    <nav>
      <ul>
        <li>
          <router-link to='/'>Home</router-link>
        </li>
        <li>
          <router-link to='/login'>Login</router-link>
        </li>
        <li>
          <router-link to='/logout'>Logout</router-link>
        </li>
        <li>
          <router-link to='/users'>Users</router-link>
        </li>
        <li>
          <router-link to='/todos'>Todos</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',

  components: {},

  created () {
    console.log('Load user by token')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#app label {
  width: 150px;
  display: inline-block;
}
#app input {
  font-size: 16px;
  width: 300px;
}
#app fieldset {
  width: 500px;
}
</style>
