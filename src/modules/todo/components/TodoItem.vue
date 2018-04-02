<template>
  <div class='todo-item'>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',

  props: {
    id: Number,
    title: String,
    description: String,
    done: Boolean
  }
}
</script>
