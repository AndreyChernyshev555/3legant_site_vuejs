<script setup lang="ts">
import NewArrivalsItem from './NewArrivalsItem.vue'
import type { arrival } from './NewArrivalsItem.vue'

interface Props {
  itemList: arrival[]
  wrap: string
  header: string
}

const props = defineProps<Props>()

// const goodsStyles =
//   window.matchMedia('screen and (max-width: 480px)').matches && gridable
//     ? {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(2, 1fr)',
//         gridTemplateRows: 'auto',
//         gridGap: '2%',
//         overflow: 'hidden',
//         paddingBottom: '96px'
//       }
//     : { flexWrap: wrap, overflowX: overflow }
</script>

<template>
  <div className="new-arrivals">
    <div className="new-arrivals_text">
      <div className="new-arrivals_text-item1">{{ header }}</div>
      <a className="new-arrivals_text-item2" href="https://dzen.ru"> More products &#8594; </a>
    </div>
    <!--<div className="new-arrivals_goods" :style="goodsStyles">-->
    <div className="new-arrivals_goods">
      <NewArrivalsItem
        v-for="item in itemList"
        :key="item.title"
        :path="item.path"
        :rating="item.rating"
        :title="item.title"
        :price="item.price"
        :oldPrice="item?.oldPrice"
        :discount="item?.discount"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$info-background: #f3f5f7;
$secondary-color: #6c7275;
$secondary-label: #343839;
$discount-color: #38cb89;
$blue-accent: #377dff;

@mixin flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.new-arrivals {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  padding-top: 48px;
  padding-left: 11.1%;
  padding-right: 11.1%;
}

.new-arrivals_text {
  @include flex-row;
  align-items: end;
  font-weight: 500;
  letter-spacing: -0.4;
}

.new-arrivals_text-item1 {
  width: 20%;
  font-family: Poppins;
  font-size: 40px;
  line-height: 44px;
}

.new-arrivals_text-item2 {
  font-family: Inter;
  font-size: 16px;
  line-height: 28px;
  &:link {
    color: black;
  }
  &:visited {
    color: $secondary-color;
  }
}

.new-arrivals_goods {
  display: flex;
  flex-direction: row;
  gap: 2.6%;
  overflow-x: scroll;
  padding-bottom: 48px;
}

@media screen and (max-width: 480px) {
  .new-arrivals_goods {
    gap: 5%;
  }
  .new-arrivals_goods-item {
    width: fit-content;
  }
}
</style>
