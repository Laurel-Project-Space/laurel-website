<template>
  <div class="event">
    <h1>{{ event.title }}</h1>
    <ImageGallery class="imageGallery" :images="event.images" />
    <h2>{{ openingTimes }}</h2>
    <p>{{ event.description }}</p>
    <p>{{ event.artists }}</p>
    <p>{{ event.curator }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment from 'moment';

import ImageGallery from '@/components/ImageGallery.vue'

import Event from "@/types/Event";

@Options({
  props: {
    slug: String,
  },
  components: {ImageGallery},
})
export default class EventView extends Vue {

  private static dateFormat = 'DD/MM/YYYY';

  slug!: string;

  private get event(): Event {
    return this.store.getters.event(this.slug);
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

<style scoped lang="scss">
  .event {
    //display: flex;
    //flex-direction: column;

    .imageGallery {
      ////background: yellow;
      //
      //height: 800px

      //flex-grow: 1;
      //background: blue;
      //background: #42b983;
    }
  }
</style>
