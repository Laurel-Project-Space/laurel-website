<template>
  <ul>
    <li v-for="info in infos" :key="info.id">
      <InfoBlock :info="info"/>
    </li>
  </ul>
  <Footer />
  <Pattern v-if="rendered" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Info from "@/types/Info";

import InfoBlock from '@/components/InfoBlock.vue';
import Footer from "@/components/Footer.vue";
import Pattern from "@/components/Pattern.vue";

@Options({
  components: {
    InfoBlock,
    Footer,
    Pattern,
  },
})
export default class EventsView extends Vue {

  rendered = false;

  public async mounted(): Promise<void> {
    document.title = "Laurel - About";
    await this.store.dispatch('fetchInfos');
    this.rendered = true;
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
