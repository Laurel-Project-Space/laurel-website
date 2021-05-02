import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {newStore, State} from './store'
import StubLinkRepository from "@/repository/StubLinkRepository";
import StubEventRepository from "@/repository/StubEventRepository";
import {Store} from "vuex";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties  {
        store: Store<State>
    }
}

const linkRepository = new StubLinkRepository();
const eventRepository = new StubEventRepository();

const store: Store<State> = newStore(linkRepository, eventRepository);
const app = createApp(App).use(store).use(router)

app.config.globalProperties.store = store;
app.mount('#app');
