<template>
  <h1>Events</h1>
  <EventsList :events="events" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import EventsList from "@/components/EventsList.vue";

import { store } from "@/main";

import Event from "@/types/Event";

@Options({
  components: {
    EventsList,
  },
})
export default class EventsView extends Vue {

  public async mounted(): Promise<void> {
    await store.dispatch('fetchEvents');
  }

  get events(): Array<Event> {
    return store.getters.events;
  }

}
</script>
