import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {newStore, State} from './store'
import {Store} from "vuex";

import VueGtag from "vue-gtag-next";

import StaticLinkRepository from "@/repository/StaticLinkRepository";
import StaticEventRepository from "@/repository/StaticEventRepository";
import StaticInfoRepository from "@/repository/StaticInfoRepository";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties  {
        store: Store<State>
    }
}

const linkRepository = new StaticLinkRepository();
const eventRepository = new StaticEventRepository();
const infoRepository = new StaticInfoRepository();

const store: Store<State> = newStore(linkRepository, eventRepository, infoRepository);
const app = createApp(App)
    .use(store)
    .use(router)
    .use(VueGtag, {
        property: {
            id: "UA-156922100-1",
        }
    });

app.config.globalProperties.store = store;
app.mount('#app');
