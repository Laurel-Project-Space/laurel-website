<template>
  <h1>{{ event.title }}</h1>
  <h2>{{ openingTimes }}</h2>
  <p>{{ event.description }}</p>
  <p>{{ event.artists }}</p>
  <p>{{ event.curator }}</p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment from 'moment';

import { store } from "@/main";

import Event from "@/types/Event";

@Options({
  props: {
    slug: String,
  },
  components: {},
})
export default class EventView extends Vue {

  private static dateFormat = 'DD/MM/YYYY';

  slug!: string;

  private get event(): Event {
    return store.getters.event(this.slug);
  }

  private get openingTimes(): string {
    const event = this.event;
    let openingTimes = moment(event.startDate).format(EventView.dateFormat)

    if (event.endDate) {
      openingTimes = `${openingTimes} - ${moment(event.endDate).format(EventView.dateFormat)}`
    }

    return openingTimes
  }

}
</script>
