<template>
  <div class="footer">
    <span v-for="link in links" :key="link.id">
      <a v-bind:key="link.id" target="_blank" v-bind:href="link.url"> {{ link.name }}</a>
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Link from "@/types/link";

@Options({
  props: {
    links: Object as () => Array<Link>,
  }
})
export default class Footer extends Vue {
  links!: Array<Link>
}
</script>

<style scoped lang="scss">
  a {
    padding-right: 50px;
  }
</style>
