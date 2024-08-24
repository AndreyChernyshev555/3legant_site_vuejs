<script setup lang="ts">
  export interface article {
    path: string
    label: string
    id?: number
  }
  const props = defineProps<article>();
</script>

<template>
  <div className="articles_item">
    <img className="articles_img" :src="path" />
    <span className="articles_name">{{ label }}</span>
    <a className="articles_read" href="https://dzen.ru"> Read More &#8594; </a>
  </div>
</template>

<style lang="scss" scoped>
$secondary-color: #6c7275;
.articles_item {
  display: flex;
  flex-direction: column;
  width: 31.23%;
  gap: 12px;
}
.articles_name {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}
.articles_read {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.4;
  &:link {
    color: black;
  }
  &:visited {
    color: $secondary-color;
  }
}
</style>
