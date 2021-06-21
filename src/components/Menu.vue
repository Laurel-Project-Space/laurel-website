<template>
  <img class="logo" src="../assets/graphics/logo.svg" alt="exhibitions"/>
  <router-link to="/exhibitions">
    <img class="menu-link" src="../assets/graphics/exhibitions.svg" alt="exhibitions"/>
  </router-link>
  <router-link to="/about">
    <img class="menu-link" src="../assets/graphics/about.svg" alt="exhibitions"/>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {}
})
export default class Menu extends Vue {}
</script>

<style scoped lang="scss">
.logo {
  height: 50px;
  margin-right: 30px;
}

.menu-link {
  height: 50px;
  margin-right: 30px;

  &:hover {
    filter: invert(20%) sepia(48%) saturate(4100%) hue-rotate(103deg) brightness(92%) contrast(104%);
  }
}
</style>
