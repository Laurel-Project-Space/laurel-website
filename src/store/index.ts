import { createStore } from 'vuex'

import Link from "@/types/link";
import Event from "@/types/Event";

export default createStore({
  state: {
    links: Array<Link>(),
    events: Array<Event>(),
  },
  mutations: {
    setLinks(state, links: Array<Link>) {
      state.links = links;
    },
    setEvents(state, events: Array<Event>) {
      state.events = events;
    },
  },
  getters: {
    getLinks(state) {
      return state.links;
    },
    getEvents(state) {
      return state.events;
    },
    getEvent(state) {
      return (slug: string): Event | void => {
        for (const event of state.events) {
          if (event.slug === slug) {
            return event
          }
        }
      };
    }
  },
  actions: {
    async init(context) {
      await Promise.all([
        context.dispatch('fetchLinks'),
        context.dispatch('fetchEvents'),
      ]);
    },
    async fetchLinks(context) {
      const links: Array<Link> = [{
        id: '1',
        name: 'link 1',
        url: 'https://google.com',
      }, {
        id: '2',
        name: 'link 2',
        url: 'https://facebook.com',
      }];

      context.commit('setLinks', links);
    },
    async fetchEvents(context) {
      const events: Array<Event> = [{
        id: '1',
        slug: 'example-event-1',
        title: 'example event 1',
        startDate: '01-01-2021',
        artists: 'some artist, another artist',
        description: 'This is the description of the show.',
        upcoming: true,
      }, {
        id: '2',
        slug: 'example-event-2',
        title: 'example event 2',
        startDate: '01-01-2021',
        endDate: '05-01-2021',
        artists: 'some artist, another artist',
        curator: 'some curator',
        description: 'This is the description of the show.',
        upcoming: false,
      }, {
        id: '3',
        slug: 'example-event-3',
        title: 'example event 3',
        startDate: '01-01-2021',
        endDate: '05-01-2021',
        artists: 'some artist, another artist',
        curator: 'some curator',
        description: 'This is the description of the show.',
        upcoming: false,
      }];

      context.commit('setEvents', events);
    }
  },
  modules: {
  }
})
