<template>
  <router-link to="/">Laurel</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/events">Events</router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {}
})
export default class Menu extends Vue {}
</script>

<style scoped lang="scss">
  a {
    padding-right: 50px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
