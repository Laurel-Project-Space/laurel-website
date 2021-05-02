<template>
  <h1>Events</h1>
  <EventsList :events="events" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import EventsList from "@/components/EventsList.vue";

import Event from "@/types/Event";

@Options({
  components: {
    EventsList,
  },
})
export default class EventsView extends Vue {

  public async mounted(): Promise<void> {
    await this.store.dispatch('fetchEvents');
  }

  get events(): Array<Event> {
    return this.store.getters.events;
  }

}
</script>
