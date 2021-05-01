import {createStore, Store} from 'vuex'

import Link from "@/types/link";
import Event from "@/types/Event";
import About from "@/types/About";

import {
  LinkRepository,
  EventRepository,
} from "@/repository/repository";

interface State {
  abouts: Array<About>;
  links: Array<Link>;
  events: Array<Event>;
}

export function newStore(linkRepository: LinkRepository, eventRepository: EventRepository): Store<State> {
  return createStore({
    state: {
      links: Array<Link>(),
      events: Array<Event>(),
      abouts: Array<About>(),
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
      links(state) {
        return state.links;
      },
      events(state) {
        return state.events;
      },
      event(state) {
        return (slug: string): Event | void => {
          for (const event of state.events) {
            if (event.slug === slug) {
              return event;
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
        const links: Array<Link> = await linkRepository.getAll();
        context.commit('setLinks', links);
      },
      async fetchEvents(context) {
        const events = await eventRepository.getAll();
        context.commit('setEvents', events);
      }
    },
    modules: {}
  });
}
