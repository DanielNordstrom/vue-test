<template>
  <div id="app">
    <router-view></router-view>
    <!--
    <TodoList />
    <UserList />
    <LoginForm />
  -->
  </div>
</template>

<script>
import todo from './modules/todo'
import user from './modules/user'
import auth from './modules/auth'

export default {
  name: 'app',
  /*
  components: {
    TodoList: todo.components.TodoList,
    UserList: user.components.UserList,
    LoginForm: auth.components.LoginForm
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center; */
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
