import {createStore, Store} from 'vuex'

import Link from "@/types/Link";
import Event from "@/types/Event";
import Info from "@/types/Info";

import {
  LinkRepository,
  EventRepository,
  InfoRepository,
} from "@/repository/Repository";

export interface State {
  infos: Array<Info>;
  links: Array<Link>;
  events: Array<Event>;
}

export function newStore(linkRepository: LinkRepository, eventRepository: EventRepository, infoRepository: InfoRepository): Store<State> {
  return createStore({
    state: {
      links: Array<Link>(),
      events: Array<Event>(),
      eventMap: new Map<string, Event>(),
      infos: Array<Info>(),
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
      setInfos(state, infos: Array<Info>) {
        state.infos = infos;
      }
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
      },
      infos(state) {
        return state.infos;
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
      },
      async fetchInfos(context) {
        const infos = await infoRepository.getAll();
        context.commit('setInfos', infos);
      }
    },
    modules: {}
  });
}
