<template>
  <div class="event">
    <h1 class="center-text title">{{ event.title }}</h1>
    <h2 class="center-text openingTimes">{{ openingTimes }}</h2>
    <h2 v-if="event.artists" class="artists left-align">With works by {{ event.artists }}</h2>
    <h2 v-if="event.curator" class="curators left-align">Curated by {{ event.curator }}</h2>
    <ImageGallery v-if="event.images" class="imageGallery" :images="event.images" />
    <p class="description" v-html="formatMarkdown(event.description)"></p>
    <Footer />
  </div>
  <Pattern v-if="rendered" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment from 'moment';

import ImageGallery from '@/components/ImageGallery.vue'
import Footer from "@/components/Footer.vue";
import Pattern from "@/components/Pattern.vue";

import Event from "@/types/Event";

@Options({
  props: {
    slug: String,
  },
  components: {
    ImageGallery,
    Footer,
    Pattern,
  },
})
export default class EventView extends Vue {

  private static dateFormatDay = 'DD';
  private static dateFormatMonth = 'DD.MM';
  private static dateFormatYear = 'DD.MM.YYYY';

  slug!: string;

  rendered = false;

  public async created(): Promise<void> {
    await this.store.dispatch('fetchEvents');
  }

  public async mounted(): Promise<void> {
    document.title = `Laurel - ${this.event.title}`;
    this.rendered = true;
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

  private formatMarkdown(markdown: string): string {
    let str = markdown;
    const elements = markdown.match(/\[.*?\)/g);
    if (elements != null && elements.length > 0) {
      for (const el of elements) {
        if (el !== undefined) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: Object is possibly 'null'.
          const txt = el.match(/\[(.*?)\]/)[1]; // get only the txt
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: Object is possibly 'null'.
          const url = el.match(/\((.*?)\)/)[1]; // get only the link
          str = str.replace(el, `<a style="color:black;" href="${url}"
            target="_blank">${txt}</a>`);
        }
      }
    }
    return str;
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

      @media (max-width: 850px) {
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

      @media (max-width: 850px) {
        &{
          width: 90%;
        }
      }

      @media (max-width: 750px) {
        &{
          width: 100%;
        }
      }

      white-space: pre-wrap;

      margin-top: 40px;
      margin-bottom: 40px;

      line-height: 1.6;
    }
  }
</style>
