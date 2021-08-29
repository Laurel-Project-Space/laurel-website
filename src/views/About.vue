<template>
  <h1></h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class EventsView extends Vue {
  public async mounted(): Promise<void> {
    await this.store.dispatch('fetchInfos');
  }
}
</script>
