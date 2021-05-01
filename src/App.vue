<template>
  <Menu/>
  <router-view/>
  <Footer :links="links" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

import { store } from "@/main";

import Link from "@/types/link";

@Options({
  components: {
    Menu,
    Footer,
  },
})
export default class App extends Vue {

  public async mounted(): Promise<void> {
    await store.dispatch('init');
  }

  get links(): Array<Link> {
    return store.getters.links;
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
