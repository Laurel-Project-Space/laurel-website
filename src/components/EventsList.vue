<template>
  <div class="eventsList">
    <ul>
      <li v-for="event in upcomingEvents" :key="event.id">
        <router-link :to="{ name: 'Event', params: { slug: event.slug }}">
          <div class="link">
            <h2 class="date">{{ formatOpeningTimes(event.startDate, event.endDate) }}</h2>
            <h2 class="title">{{ event.title }}</h2>
          </div>
        </router-link>
      </li>
    </ul>
    <h2 class="subheading">Archive</h2>
    <ul>
      <li v-for="event in archiveEvents" :key="event.id">
        <router-link :to="{ name: 'Event', params: { slug: event.slug }}">
          <div class="link">
            <h2 class="title">{{ event.title }}</h2>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Event from "@/types/Event";
import moment from "moment";

@Options({
  props: {
    events: Object as () => Array<Event>,
  }
})
export default class EventsList extends Vue {

  private static dateFormatDay = 'DD';
  private static dateFormatMonth = 'DD.MM';
  private static dateFormatYear = 'DD.MM.YYYY';

  events!: Array<Event>;

  private upcomingEvents: Array<Event> = [];
  private archiveEvents: Array<Event> = [];

  mounted(): void {
    this.events.forEach(event => {
      if (event.upcoming) {
        this.upcomingEvents.push(event);
      } else {
        this.archiveEvents.push(event);
      }
    });
  }

  private formatOpeningTimes(start: Date, end: Date): string {
    const startDate = moment(start);
    const endDate = end ? moment(end) : null;

    if (!endDate || startDate.isSame(endDate)) {
      return startDate.format(EventsList.dateFormatYear);
    }

    if (startDate.isSame(endDate, 'month')) {
      return `${startDate.format(EventsList.dateFormatDay)} — ${endDate.format(EventsList.dateFormatYear)}`;
    }

    if (startDate.isSame(endDate, 'year')) {
      return `${startDate.format(EventsList.dateFormatMonth)} — ${endDate.format(EventsList.dateFormatYear)}`;
    }

    return `${startDate.format(EventsList.dateFormatYear)} — ${endDate.format(EventsList.dateFormatYear)}`;
  }
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.subheading {
  padding-top: 15px;
}

.link {
  display: inline-block;

  .date {
    color: black;
  }

  .title {
    color: #005e1f;

    &:hover {
      text-decoration: underline;
    }
  }

}
</style>
