<template>
  <div class="container">
    <h1>{{ info.title }}</h1>
    <p>{{ info.description }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Info from "@/types/Info";

@Options({
  props: {
    info: Object as () => Info,
  }
})
export default class InfoBlock extends Vue {

  info!: Info;

}
</script>

<style scoped lang="scss">
.container {
  padding: 30px 240px;

  @media (max-width: 1200px) {
    &{
      padding: 30px 60px;
    }
  }
}

h1 {
  text-align: center;
}

p {
  font-size: 23px;
  white-space: pre-wrap;
}
</style>
