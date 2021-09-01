<template>
  <div v-if="rendered" class="events">
    <EventsList class="eventList" :upcomingEvents="upcomingEvents" :archiveEvents="archiveEvents" />
    <div class="footer">
      <Footer />
    </div>
  </div>
  <Pattern v-if="rendered" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import EventsList from "@/components/EventsList.vue";
import Footer from "@/components/Footer.vue";
import Pattern from "@/components/Pattern.vue";

import Event from "@/types/Event";

@Options({
  components: {
    EventsList,
    Footer,
    Pattern,
  },
})
export default class EventsView extends Vue {

  rendered = false;

  public async mounted(): Promise<void> {
    document.title = "Laurel - Exhibitions";
    await this.store.dispatch('fetchEvents');
    this.rendered = true;
  }

  get upcomingEvents(): Array<Event> {
    return this.store.getters.upcomingEvents;
  }

  get archiveEvents(): Array<Event> {
    return this.store.getters.archiveEvents;
  }
}
</script>

<style scoped lang="scss">
.events {
  display: flex;
  flex-direction: column;

  .footer {
    position: fixed;

    @media (max-width: 1500px) {
      &{
        position: relative;
      }
    }

    @media (min-width: 1500px) {
      width: calc(100% - 80px);
      left: 40px;
      right: 40px;
      bottom: 40px;
    }
  }

  .eventList {
    z-index: 2;
  }
}
</style>
