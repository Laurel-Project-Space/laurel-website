<template>
  <div class="event">
    <h1 class="center-text title">{{ event.title }}</h1>
    <h2 class="center-text openingTimes">{{ openingTimes }}</h2>
    <h2 v-if="event.artists" class="artists left-align">With works by {{ event.artists }}</h2>
    <h2 v-if="event.curator" class="curators left-align">Curated by {{ event.curator }}</h2>
    <ImageGallery v-if="event.images" class="imageGallery" :images="event.images" />
    <p class="description">{{ event.description }}</p>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment from 'moment';

import ImageGallery from '@/components/ImageGallery.vue'
import Footer from "@/components/Footer.vue";

import Event from "@/types/Event";

@Options({
  props: {
    slug: String,
  },
  components: {
    ImageGallery,
    Footer,
  },
})
export default class EventView extends Vue {

  private static dateFormatDay = 'DD';
  private static dateFormatMonth = 'DD.MM';
  private static dateFormatYear = 'DD.MM.YYYY';

  slug!: string;

  public async created(): Promise<void> {
    await this.store.dispatch('fetchEvents');
  }

  private get event(): Event {
    return this.store.getters.event(this.slug);
  }

  private get openingTimes(): string {
    const event = this.event;
    const startDate = moment(event.startDate);
    const endDate = event.endDate ? moment(event.endDate) : null;

    if (!endDate || startDate.isSame(endDate)) {
      return startDate.format(EventView.dateFormatYear);
    }

    if (startDate.isSame(endDate, 'month')) {
      return `${startDate.format(EventView.dateFormatDay)} — ${endDate.format(EventView.dateFormatYear)}`;
    }

    if (startDate.isSame(endDate, 'year')) {
      return `${startDate.format(EventView.dateFormatMonth)} — ${endDate.format(EventView.dateFormatYear)}`;
    }

    return `${startDate.format(EventView.dateFormatYear)} — ${endDate.format(EventView.dateFormatYear)}`;
  }

}
</script>

<style scoped lang="scss">
  .event {
    display: flex;
    flex-direction: column;
    align-items: center;

    .center-text {
      text-align: center;
    }

    .left-align {
      margin-right: auto;
    }

    .imageGallery {
      height: 60vh;

      @media (max-width: 800px) {
        &{
          height: 50vh;
        }
      }

      @media (max-width: 700px) {
        &{
          height: 40vh;
        }
      }

      @media (max-width: 600px) {
        &{
          height: 30vh;
        }
      }

      margin-top: 40px;
      margin-bottom: 40px;
    }

    .description {
      width: 80%;

      margin-top: 40px;
      margin-bottom: 40px;

      line-height: 1.6;
    }
  }
</style>
