<template>
  <div class='todo-wrapper'>
    <h2>TodoList</h2>

    <div v-if='loading' class='loading'>
      Loading...
    </div>

    <div v-if='error' class='error'>
      {{ error }}
    </div>

    <div class='todo-list-wrapper'>
      <ul v-if='this.getTodosCount' class='todo-list'>
        <li v-for='todo in this.getTodos' v-bind:key='todo.uri'>
          <TodoItem v-bind='todo' />
          <button @click='deleteTodo(todo.uri)'>Delete</button>
        </li>
      </ul>
      <div v-if='!this.getTodosCount' class='todo-none'>
        There are no todos.
      </div>
    </div>

    <hr />
    <TodoForm />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

import getters from '../getters'
import actions from '../actions'

const namespace = 'todo'
const { mapGetters, mapActions } = createNamespacedHelpers(namespace)

export default {
  name: 'TodoList',

  data () {
    return {
      loading: true,
      error: null
    }
  },

  components: {
    TodoItem,
    TodoForm
  },

  computed: {...mapGetters(Object.keys(getters))},
  methods: {...mapActions(Object.keys(actions))},

  created () {
    this.fetchTodos().then(() => (this.loading = false))
  }
}
</script>

<style scoped>
.error {
  color: red;
}

.todo-list li {
  list-style: none;
  background: #eee;
  display: block;
  padding: 20px;
  margin: 20px 0;
  border-radius: 20px;
  min-width: 200px;
}
</style>
