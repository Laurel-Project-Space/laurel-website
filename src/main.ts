import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {newStore} from './store'
import StubLinkRepository from "@/repository/StubLinkRepository";
import StubEventRepository from "@/repository/StubEventRepository";

const linkRepository = new StubLinkRepository();
const eventRepository = new StubEventRepository();

const store = newStore(linkRepository, eventRepository);

createApp(App).use(store).use(router).mount('#app');

export {
    store,
};
