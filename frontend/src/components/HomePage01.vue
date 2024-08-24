<script lang="ts" setup>
import Offer from './Offer.vue'
import Head from './Head.vue'
import Description from './Description.vue'
import Collection from './Collection.vue'
import NewArrivals from './NewArrivals.vue'
import type { arrival } from './NewArrivalsItem.vue'
import Pros from './Pros.vue'
import Info2 from './Info2.vue'
import Article from './Article.vue'
import Newsletter from './Newsletter.vue'
import FooterComp from './FooterComp.vue'

const itemInfo: arrival[] = [
  {
    path: 'src/img/furniture/sofa.png',
    rating: 5,
    title: 'Loveseat Sofa',
    price: '$199.00',
    oldPrice: '$400.00',
    discount: '-50%'
  },
  {
    path: 'src/img/furniture/lamp.png',
    rating: 5,
    title: 'Table Lamp',
    price: '$24.99'
  },
  {
    path: 'src/img/furniture/beige_lamp.png',
    rating: 5,
    title: 'Beige Table Lamp',
    price: '$24.00'
  },
  {
    path: 'src/img/furniture/cart.png',
    rating: 5,
    title: 'Bamboo Basket',
    price: '$10.50'
  },
  {
    path: 'src/img/furniture/toaster.png',
    rating: 5,
    title: 'Toaster',
    price: '$249.25',
    oldPrice: '$400.00',
    discount: '-50%'
  }
]

const goodsInfo = [
  { title: 'Living Room', img: '/src/img/rooms/living_room.svg', top: '7%', left: '8.6%' },
  { title: 'Bedroom', img: '/src/img/rooms/bedroom.svg' },
  { title: 'Kitchen', img: '/src/img/rooms/kitchen.svg' }
]
const collOffering = 'Shop Now'
</script>
<template>
  <div>
    <Offer />
    <Head />
    <div className="page">
      <Description />
      <Collection :goods="goodsInfo" :collOffer="collOffering" />
      <NewArrivals :itemList="itemInfo" :wrap="'no-wrap'" header="New arrivals" />
      <Pros />
      <Info2 />
      <Article />
      <Newsletter :path="'/src/img/newsletter.png'" />
    </div>
    <FooterComp />
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

@mixin thin {
  padding-left: 11.15%;
  padding-right: 11.15%;
}

body {
  margin: 0;
}

.margin-zero {
  margin: 0;
}

.page {
  width: 75%;
  margin-left: 12.5%;
  margin-right: 12.5%;
}

@media screen and (max-width: 480px) {
  .page {
    width: 100%;
    margin: 0;
    overflow: hidden;
  }
  .description {
    flex-direction: column;
  }
  .description_item1 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -0.4px;
  }
  .description_item2 {
    font-size: 14px;
    line-height: 22px;
    padding-right: 0;
  }
  .new-arrivals_text-item2 {
    display: none;
  }
  .info2 {
    flex-direction: column;
  }
  .info2_img {
    width: 100%;
  }
  .info2_offer {
    padding: 10% 5% 5% 5%;
    width: auto;
  }
  .articles {
    padding: 12.5%;
  }
  .articles_item {
    width: 100%;
  }
  .articles_block {
    flex-direction: column;
    gap: 20px;
  }
  .newsletter {
    padding: 0;
  }
  .newsletter_block {
    position: static;
    top: 0;
    left: 0;
    width: auto;
    padding: 5%;
  }
  .newsletter_form-right {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.4px;
    text-align: left;
  }
}
</style>
