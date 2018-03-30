<template>
  <div id="app">
    <TodoList />
    <UserList />
  </div>
</template>

<script>
import todos from './modules/todos'
import users from './modules/users'

export default {
  name: 'app',
  components: {
    TodoList: todos.components.TodoList,
    UserList: users.components.UserList
  }
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
