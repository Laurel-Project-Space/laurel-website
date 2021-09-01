<template>
  <div class="footer">
    <div v-for="link in links" :key="link.id">
      <a v-bind:key="link.id" target="_blank" v-bind:href="link.link"> {{ link.name }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Link from "@/types/Link";

@Options({})
export default class Footer extends Vue {

  public async mounted(): Promise<void> {
    await this.store.dispatch('fetchLinks');
  }

  get links(): Array<Link> {
    return this.store.getters.links;
  }


}
</script>

<style scoped lang="scss">
a {
  font-size: 20px;

  margin: 30px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 750px) {
    margin: 0;
    display: block;
    padding-bottom: 15px;
  }
}

.footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 750px) {
    display: block;
  }

  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
