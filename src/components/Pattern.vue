<template>
  <div id="pattern">
    <div class="wrap">
      <img id="p1" class="pattern" src="../assets/graphics/15.svg" width="35" height="35"/>
      <img id="p2" class="pattern" src="../assets/graphics/15.svg" width="35" height="35"/>
      <img id="p3" class="pattern" src="../assets/graphics/15.svg" width="35" height="35"/>
      <img id="p4" class="pattern" src="../assets/graphics/15.svg" width="35" height="35"/>
      <img id="p5" class="pattern" src="../assets/graphics/15.svg" width="35" height="35"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Pattern extends Vue {

  rendered = false;

  public mounted(): void {
    this.$nextTick(() => {
      this.renderPattern();
    });
  }

  private renderPattern() {
    const content = document.getElementById('pattern') as HTMLElement;
    // const canvas = document.getElementById('pattern') as HTMLCanvasElement;
    // const ctx = canvas!.getContext('2d');
    // if (ctx === null) {
    //   return;
    // }

    const canvasWidth = content.clientWidth
    const canvasHeight = content.clientHeight

    const patternSize = 35;

    // split dimensions into four
    const boxWidth = canvasWidth / 2;
    const boxHeight = canvasHeight / 2
    //
    // //const imgSrc = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg"
    // const imgSrc = "https://res.cloudinary.com/dhft1w7ck/image/upload/v1630528287/15_taeenz.svg";

    // top-left
    const p1 = document.getElementById('p1');
    if (p1 !== null) {
      Object.assign(p1.style, {
        left: `${randomIntFromInterval(0, boxHeight - patternSize)}px`,
        top: `${randomIntFromInterval(0, boxWidth - patternSize)}px`,
      });
    }
    // this.renderShape(ctx, imgSrc, randomIntFromInterval(0, boxWidth - patternSize), randomIntFromInterval(0, boxHeight - patternSize));
    // top-right
    const p2 = document.getElementById('p2');
    if (p2 !== null) {
      Object.assign(p2.style, {
        left: `${randomIntFromInterval(boxWidth, (boxWidth*2) - patternSize)}px`,
        top: `${randomIntFromInterval(0, boxHeight - patternSize)}px`,
      });
    }
    // this.renderShape(ctx, imgSrc, randomIntFromInterval(boxWidth, (boxWidth*2) - patternSize), randomIntFromInterval(0, boxHeight - patternSize));
    // // bottom-left
    const p3 = document.getElementById('p3');
    if (p3 !== null) {
      Object.assign(p3.style, {
        left: `${randomIntFromInterval(0, boxWidth - patternSize)}px`,
        top: `${randomIntFromInterval(boxHeight, (boxHeight*2) - patternSize)}px`,
      });
    }
    // this.renderShape(ctx, imgSrc, randomIntFromInterval(0, boxWidth - patternSize), randomIntFromInterval(boxHeight, (boxHeight*2) - patternSize));
    // // bottom-right
    const p4 = document.getElementById('p4');
    if (p4 !== null) {
      Object.assign(p4.style, {
        left: `${randomIntFromInterval(boxWidth, (boxWidth*2) - patternSize)}px`,
        top: `${randomIntFromInterval(boxHeight, (boxHeight*2) - patternSize)}px`,
      });
    }
    // this.renderShape(ctx, imgSrc, randomIntFromInterval(boxWidth, (boxWidth*2) - patternSize), randomIntFromInterval(boxHeight, (boxHeight*2) - patternSize));
    // // wild-card
    const p5 = document.getElementById('p5');
    if (p5 !== null) {
      Object.assign(p5.style, {
        left: `${randomIntFromInterval(0, canvasWidth - patternSize)}px`,
        top: `${randomIntFromInterval(0, canvasHeight - patternSize)}px`,
      });
    }
    // this.renderShape(ctx, imgSrc, randomIntFromInterval(0, canvasWidth - patternSize), randomIntFromInterval(0, canvasHeight - patternSize));
  }

  private renderShape(ctx: CanvasRenderingContext2D, src: string, x: number, y: number) {
    const img = new Image();
    img.onload = function() {
      ctx.drawImage(img, x, y, 35, 35);
    }
    img.src = src;
  }
}

function randomIntFromInterval(min: number, max: number) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
</script>

<style scoped lang="scss">
  #pattern {
    z-index: 1000; // or any value higher than your other elements
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;

    .wrap {
      height: 100%;
      width: 100%;

      .pattern {
        position: absolute;
      }
    }
  }
</style>
