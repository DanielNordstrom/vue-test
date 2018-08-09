<template>
  <div class='todo-form-wrapper'>
    <fieldset>
      <legend>Create Todo</legend>
      <form class='todo-form'>
        <div class='form-element'>
          <label for='title'>Title</label>
          <input type='text' name='title' v-model='title' />
        </div>
        <div class='form-element'>
          <label for='description'>Description</label>
          <input type='text' name='description' v-model='description'>
        </div>
        <button @click.stop.prevent='postTodo'>Create</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import actions from '../actions'

import types from '../types'

const namespace = 'todo'
const { mapActions } = createNamespacedHelpers(namespace)

export default {
  name: 'TodoForm',

  data () {
    return {
      title: '',
      description: '',
      done: false
    }
  },

  methods: {
    ...mapActions(Object.keys(actions)),

    postTodo () {
      let payload = {
        title: this.title,
        description: this.description,
        done: this.done
      }
      this.$store.dispatch('todo/' + types.TODO_CREATE, payload)
    }
  }
}
</script>

<style scoped>
.todo-form-wrapper {
  text-align: left;
}

.form-element {
  margin: 10px 0;
}

label {
}
</style>
