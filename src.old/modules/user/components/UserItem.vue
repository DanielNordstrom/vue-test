<template>
  <div>
    <h3>
      <router-link :to='this.uri'>{{ firstname }} {{ lastname }}</router-link>
    </h3>
    <span v-if='admin'>(admin)</span>
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
