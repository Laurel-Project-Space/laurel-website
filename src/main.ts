import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {newStore, State} from './store'
import {Store} from "vuex";

import CMSLinkRepository from "@/repository/CMSLinkRepository";
import CMSEventRepository from "@/repository/CMSEventRepository";
import CMSInfoRepository from "@/repository/CMSInfoRepository";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties  {
        store: Store<State>
    }
}

const cmsURL = process.env['VUE_APP_CMS_URL'];

const linkRepository = new CMSLinkRepository(cmsURL);
const eventRepository = new CMSEventRepository(cmsURL);
const infoRepository = new CMSInfoRepository(cmsURL);

const store: Store<State> = newStore(linkRepository, eventRepository, infoRepository);
const app = createApp(App).use(store).use(router)

app.config.globalProperties.store = store;
app.mount('#app');
