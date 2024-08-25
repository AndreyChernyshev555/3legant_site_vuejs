<script setup lang="ts">
import { ref } from 'vue'
const imageList: string[] = [
  '/src/img/slider_images/home_page_slide1.png',
  '/src/img/slider_images/home_page_slide2.jpg',
  '/src/img/slider_images/home_page_slide3.jpg',
  '/src/img/slider_images/home_page_slide4.jpg'
]
const imageWidth = 60
const currImg = ref(0)
const handleLeftClick = function () {
  if (currImg.value > 0) currImg.value--
  else currImg.value = imageList.length - 1
}
const handleRightClick = function () {
  if (currImg.value < imageList.length - 1) currImg.value++
  else currImg.value = 0
}
let timerId = setInterval(() => handleRightClick(), 3000)
</script>

<template>
  <div className="slider">
    <div className="slide_filter-left"></div>
    <div className="slide_filter-right"></div>
    <div
      className="slide_carousel-imgs"
      :style="{
        transform: `translateX(-${currImg * imageWidth}vw)`,
        width: `${imageList.length * imageWidth}vw`
      }"
    >
      <div
        className="slide_carousel-imgs-item"
        v-for="n in imageList.length"
        :key="n"
        :style="{
          backgroundImage: `url(${imageList[n - 1]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '64%',
          width: '60vw',
          height: '29vw'
        }"
      />
    </div>
    <div className="slide_button-left" @click="handleLeftClick">
      <img :src="'/src/img/icons/arrow-left.svg'" />
    </div>
    <div className="slide_button-right" @click="handleRightClick">
      <img :src="'/src/img/icons/arrow-right.svg'" />
    </div>
    <div className="slide_indicator">
      <div
        class="slide_indicator-item"
        v-for="n in imageList.length"
        :key="n"
        :class="{ 'slide_indicator-item__light': n - 1 == currImg }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$info-background: #f3f5f7;
$secondary-color: #6c7275;

.slider {
  padding-left: 11.15%;
  padding-right: 11.15%;
  position: relative;
  overflow: hidden;
  height: 25vw;
}
.slide_carousel-imgs {
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 200vw;
  transition: transform 1s cubic-bezier(0.37, 0, 0.63, 1);
}
.slide_filter-left {
  background-color: white;
  width: 27.8%;
  height: 560px;
  position: absolute;
  margin-left: -27.8%;
  z-index: 10;
}
.slide_filter-right {
  background-color: white;
  width: 27.8%;
  height: 560px;
  position: absolute;
  margin-left: 77%;
  z-index: 10;
}
@mixin slide_button {
  align-content: bottom;
  position: absolute;
  border-radius: 50%;
  background-color: $info-background;
  width: 2.5vw;
  height: 2.5vw;
  top: 45.275%;
}
.slide_button-left {
  @include slide_button;
  color: $secondary-color;
  left: 13%;
  img {
    height: 100%;
  }
}
.slide_button-right {
  @include slide_button;
  color: #141718;
  right: 13%;
  img {
    height: 100%;
  }
}
.slide_indicator {
  position: absolute;
  bottom: 5%;
  width: 77.7%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
}

.slide_indicator-item {
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.slide_indicator-item__light {
  background-color: rgba(255, 255, 255, 1);
}

@media screen and (max-width: 480px) {
  .slider {
    padding-left: 0;
    padding-right: 0;
    margin-right: 11.1%;
    margin-left: 11.1%;
  }
  .slide_button-left {
    display: none;
  }
  .slide_button-right {
    display: none;
  }
}
</style>
