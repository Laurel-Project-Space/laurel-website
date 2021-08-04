import {createStore, Store} from 'vuex'

import Link from "@/types/Link";
import Event from "@/types/Event";
import About from "@/types/About";

import {
  LinkRepository,
  EventRepository,
} from "@/repository/Repository";

export interface State {
  abouts: Array<About>;
  links: Array<Link>;
  events: Array<Event>;
}

export function newStore(linkRepository: LinkRepository, eventRepository: EventRepository): Store<State> {
  return createStore({
    state: {
      links: Array<Link>(),
      events: Array<Event>(),
      eventMap: new Map<string, Event>(),
      abouts: Array<About>(),
    },
    mutations: {
      setLinks(state, links: Array<Link>) {
        state.links = links;
      },
      setEvents(state, events: Array<Event>) {
        state.events = events;
        for (const event of events) {
          state.eventMap.set(event.slug, event);
        }
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
          return state.eventMap.get(slug);
        };
      }
    },
    actions: {
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
