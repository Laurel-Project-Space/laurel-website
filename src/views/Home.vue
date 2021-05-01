<template>
  <div class="home">
    <HelloWorld msg="Laurel Project Space"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>
