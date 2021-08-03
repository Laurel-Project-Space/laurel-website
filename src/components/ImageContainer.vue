<template>
    <div class="container">
      <div class="content">
        <img @load="handleLoad" :v-show="loaded" :src="url" :alt="image.alternativeText">
        <div :v-show="loaded" class="info">
          <div class="caption">
            <p>{{ image.caption }}</p>
          </div>
          <div class="position">
            <p>{{ position }}</p>
          </div>
        </div>
      </div>
      <span v-on:click="previousImage" class="click-area-left"></span>
      <span v-on:click="nextImage" class="click-area-right"></span>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

import Image from "@/types/Image";

@Options({
  props: {
    image: Object as () => Image,
    position: String,
  },
})
export default class ImageContainer extends Vue {

  image!: Image;
  loaded = false;

  private get url(): string {
    return this.image.formats.large ? this.image.formats.large.url : this.image.url;
  }

  private previousImage() {
    this.$emit('previousImage');
  }

  private nextImage() {
    this.$emit('nextImage');
  }

  private get aspectRatio() {
    const c = ImageContainer.gcd(this.image.width, this.image.height);
    return "" + (this.image.width / c) + " " + (this.image.height / c);
  }

  private handleLoad() {
    this.loaded = true;
  }

  private static gcd(a: number, b: number): number {
    if (b > a) {
      const temp = a;
      a = b;
      b = temp
    }
    while (b != 0) {
      const m = a % b;
      a = b;
      b = m;
    }
    return a;
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: fit-content;

    //@media (max-width:960px) {
    //  max-height: 100%;
    //  width: 100%;
    //}

    img {
      max-width: 100%;
      max-height: calc(100% - 30px);
    }
  }

  .click-area-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;

    cursor: w-resize;
  }

  .click-area-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;

    cursor: e-resize;
  }
}

.info {
  padding-top: 20px;
  width: 100%;
  height: fit-content;
  display: flex;

  .caption {
    width: 70%;
    overflow-wrap: break-word;
  }

  .position {
    width: 30%;
    text-align: right;
  }
}
</style>
