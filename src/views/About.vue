<template>
  <ul>
    <li v-for="info in infos" :key="info.id">
      <InfoBlock :info="info"/>
    </li>
  </ul>
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Info from "@/types/Info";

import InfoBlock from '@/components/InfoBlock.vue';
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    InfoBlock,
    Footer,
  },
})
export default class EventsView extends Vue {

  public async mounted(): Promise<void> {
    await this.store.dispatch('fetchInfos');
  }

  private get infos(): Array<Info> {
    return this.store.state.infos;
  }

}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}


</style>
