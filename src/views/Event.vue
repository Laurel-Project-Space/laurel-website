<template>
  <h1>{{ event.title }}</h1>
  <h2>{{ openingTimes }}</h2>
  <p>{{ event.description }}</p>
  <p>{{ event.artists }}</p>
  <p>{{ event.curator }}</p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import store from "../store";

import Event from "@/types/Event";

@Options({
  props: {
    slug: String,
  },
  components: {},
})
export default class EventView extends Vue {

  slug!: string;

  private get event(): Event {
    return store.getters.getEvent(this.slug);
  }

  private get openingTimes(): string {
    const event = this.event;
    let openingTimes = event.startDate

    if (event.endDate) {
      openingTimes = `${openingTimes} - ${event.endDate}`
    }

    return openingTimes
  }

}
</script>
