<template>
  <div class="eventsList">
    <ul>
      <li v-for="event in events" :key="event.id">
        <router-link :to="{ name: 'Event', params: { slug: event.slug }}">{{ event.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Event from "@/types/Event";

@Options({
  props: {
    events: Object as () => Array<Event>,
  }
})
export default class EventsList extends Vue {}
</script>

<style scoped>

</style>
