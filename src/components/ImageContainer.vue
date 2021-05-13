<template>
  <div class="flex-container">
    <div class="image">
      <div class="image-placeholder">
        <svg :v-show="!loaded" class="placeholder" :viewBox="`0 0 ${aspectRatio}`" preserveAspectRatio="xMidYMid meet" x="0" y="0"></svg>
        <img @load="handleLoad" :src="url" :alt="image.alternativeText" :class="loaded ? 'show' : 'hide'">
      </div>
      <div class="info">
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
import { Options, Vue } from 'vue-class-component';

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
    return this.image.url;
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
.flex-container {
  padding-top: 20px;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  position: relative;
  height: fit-content;
  width: fit-content;

  .placeholder {
    background: #f3f3f3;

    max-width: 100%;
    max-height: 700px;

    grid-column: 1;
    grid-row: 1;
  }

  img {
    max-width: 100%;
    max-height: 500px;
    object-fit: contain;

    grid-column: 1;
    grid-row: 1;

    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
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

.hide {
  opacity: 0;
}

.show {
  opacity: 1;
  transition: 100ms;
}

.image-placeholder {
  display: grid;
}
</style>
