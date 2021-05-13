<template>
  <Menu/>
  <div class="content">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Menu from "@/components/Menu.vue";

import Link from "@/types/link";

@Options({
  components: {
    Menu,
  },
})
export default class App extends Vue {

  public async mounted(): Promise<void> {
    await this.store.dispatch('init');
  }

  get links(): Array<Link> {
    return this.store.getters.links;
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: NeueHaasGrotDisp-55Roman;
  src: url('./assets/fonts/NeueHaasGrotDisp-55Roman/NeueHaasGrotDisp-55Roman.eot');
  src: url('./assets/fonts/NeueHaasGrotDisp-55Roman/NeueHaasGrotDisp-55Roman.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/NeueHaasGrotDisp-55Roman/NeueHaasGrotDisp-55Roman.woff2') format('woff2'),
  url('./assets/fonts/NeueHaasGrotDisp-55Roman/NeueHaasGrotDisp-55Roman.woff') format('woff'),
  url('./assets/fonts/NeueHaasGrotDisp-55Roman/NeueHaasGrotDisp-55Roman.ttf') format('truetype');
}

@font-face {
  font-family: NeueHaasGrotDisp-56Italic;
  src: url('./assets/fonts/NeueHaasGrotDisp-56Italic/NeueHaasGrotDisp-56Italic.eot');
  src: url('./assets/fonts/NeueHaasGrotDisp-56Italic/NeueHaasGrotDisp-56Italic.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/NeueHaasGrotDisp-56Italic/NeueHaasGrotDisp-56Italic.woff2') format('woff2'),
  url('./assets/fonts/NeueHaasGrotDisp-56Italic/NeueHaasGrotDisp-56Italic.woff') format('woff'),
  url('./assets/fonts/NeueHaasGrotDisp-56Italic/NeueHaasGrotDisp-56Italic.ttf') format('truetype');
}

@font-face {
  font-family: PrestigeEliteStd;
  src: url('./assets/fonts/PrestigeEliteStd/PrestigeEliteStd.eot');
  src: url('./assets/fonts/PrestigeEliteStd/PrestigeEliteStd.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/PrestigeEliteStd/PrestigeEliteStd.woff2') format('woff2'),
  url('./assets/fonts/PrestigeEliteStd/PrestigeEliteStd.woff') format('woff'),
  url('./assets/fonts/PrestigeEliteStd/PrestigeEliteStd.ttf') format('truetype');
}

@font-face {
  font-family: PrestigeEliteStd-Slanted;
  src: url('./assets/fonts/PrestigeEliteStd-Slanted/PrestigeEliteStd-Slanted.eot');
  src: url('./assets/fonts/PrestigeEliteStd-Slanted/PrestigeEliteStd-Slanted.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/PrestigeEliteStd-Slanted/PrestigeEliteStd-Slanted.woff2') format('woff2'),
  url('./assets/fonts/PrestigeEliteStd-Slanted/PrestigeEliteStd-Slanted.woff') format('woff'),
  url('./assets/fonts/PrestigeEliteStd-Slanted/PrestigeEliteStd-Slanted.ttf') format('truetype');
}

h1, h2 {
  font-size: 33px;
  padding-bottom: 20px;
  font-weight: normal;
}

p {
  font-family: 'PrestigeEliteStd', Helvetica, Arial, sans-serif;
  font-size: 18px;
}

a {
  color: #006400;
}

#app {
  font-family: 'NeueHaasGrotDisp-55Roman', Helvetica, Arial, sans-serif;
  font-size: 18px;

  .content {
    margin: 40px;
  }
}
</style>
