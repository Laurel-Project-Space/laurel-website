<template>
  <ImageContainer class="image" :image="image" :position="position" @previousImage="decrementIndex" @nextImage="incrementIndex" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Hammer from 'hammerjs';

import ImageContainer from "@/components/ImageContainer.vue";

import Image from "@/types/Image";

@Options({
  components: {ImageContainer},
  props: {
    images: Object as () => Array<Image>,
  }
})
export default class ImageGallery extends Vue {

  images!: Array<Image>;

  private index = 0;

  public mounted(): void {
    // register key listeners
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        this.incrementIndex();
      }

      if (event.key === 'ArrowLeft') {
        this.decrementIndex();
      }
    });

    // register swipe listeners
    const el = document.getElementsByClassName('image')[0] as HTMLElement
    const hammer = new Hammer(el);
    hammer.on('swipeleft', this.incrementIndex)
    hammer.on('swiperight', this.decrementIndex)
  }

  private incrementIndex() {
    if (this.index === (this.images.length - 1)) {
      this.index = 0;
    } else {
      this.index += 1;
    }
  }

  private decrementIndex() {
    if (this.index === 0) {
      this.index = (this.images.length - 1);
    } else {
      this.index -= 1;
    }
  }

  private get image(): Image {
    return this.images[this.index];
  }

  private get position(): string {
    return `${this.index + 1} / ${this.images.length}`;
  }
}
</script>

<style scoped lang="scss">
.image {
  width: 100%;
}
</style>
