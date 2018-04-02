<template>
  <div>
    <h3>
      {{ firstname }} {{ lastname }}
      <span v-if='admin'>(admin)</span>
    </h3>
    <h4>{{ email }}</h4>

    <div>Last seen: {{ last_seen }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserItem',

  props: {
    email: String,
    firstname: String,
    lastname: String,
    admin: Boolean,
    last_seen: String,
    uri: String
  }
}
</script>
