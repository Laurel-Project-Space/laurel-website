<template>
  <div class="events">
    <EventsList :events="events" />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import EventsList from "@/components/EventsList.vue";
import Footer from "@/components/Footer.vue";

import Event from "@/types/Event";

@Options({
  components: {
    EventsList,
    Footer,
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

<style scoped lang="scss">
.events {
  display: flex;
  flex-direction: column;

  .footer {
    position: fixed;
    width: calc(100% - 80px);
    left: 40px;
    right: 40px;
    bottom: 40px;
  }
}
</style>
