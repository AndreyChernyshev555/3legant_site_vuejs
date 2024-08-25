<script lang="ts" setup>
interface partition {
  title: string
  img: string
  top?: string
  left?: string
}

interface Props {
  partitions: partition[]
  collOffer: string
}

const props = defineProps<Props>()
</script>

<template>
  <div className="collection">
    <div
      className="collection_main"
      :style="{
        background: `url(${partitions[0].img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }"
    >
      <div
        className="collection_main-text"
        :style="{
          top: `${partitions[0].top}`,
          left: `${partitions[0].left}`
        }"
      >
        <div>{{ partitions[0].title }}</div>
        <div className="collection_link">{{ collOffer }}</div>
      </div>
    </div>
    <div
      className="collection_sub-item"
      :style="{
        background: `url(${partitions[1].img})`,
        backgroundSize: 'cover'
      }"
    >
      <div className="collection_sub-text">
        <div>{{ partitions[1].title }}</div>
        <div className="collection_link">{{ collOffer }}</div>
      </div>
    </div>
    <div
      className="collection_sub-item"
      :style="{
        background: `url(${partitions[2].img})`,
        backgroundSize: 'cover'
      }"
    >
      <div className="collection_sub-text">
        <div>{{ partitions[2].title }}</div>
        <div className="collection_link">{{ collOffer }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collection {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2.5%;
  margin: 0% 11.1% 0% 11.1%;
  height: 35vw;
}
.collection_main {
  position: relative;
  grid-row: span 2;
}
.collection_main-text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Poppins;
  font-size: 34px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: -0.6px;
}
.collection_link {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.4px;
  border-bottom: solid 0.2px black;
  width: 6em;
}
.collection_sub-item {
  position: relative;
}
.collection_sub-text {
  @extend .collection_main-text;
  width: fit-content;
  height: fit-content;
  bottom: 12%;
  left: 6%;
}

@media screen and (max-width: 480px) {
  .collection {
    grid-template-columns: none;
    grid-template-rows: auto;
  }
}
</style>
