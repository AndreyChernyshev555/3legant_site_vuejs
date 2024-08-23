<script setup lang="ts">
export interface arrival {
  path: string
  rating: number
  title: string
  price: string
  oldPrice: string | undefined
  discount: string | undefined
}

const props = defineProps<arrival>()
</script>

<template>
  <div className="new-arrivals_goods-item">
    <div
      className="new-arrivals_img"
      onMouseEnter="{handleHover}"
      onMouseLeave="{handleHover}"
      :style="{
        backgroundImage: `url(${path})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }"
    >
      <div className="new-arrivals_img-info">
        <div className="new-arrivals_new">NEW</div>
        <div className="new-arrivals_discount">{{ discount }}</div>
      </div>
      <div className="new-arrivals_add-button">Add to cart</div>
    </div>
    <div className="new-arrivals_description">
      <span className="new-arrivals_rating">
        <img v-for="n in rating" :src="'/src/img/star.svg'" :key="n" />
      </span>
      <span className="new-arrivals_title">{{ title }}</span>
      <div className="new-arrivals_price">
        <span className="new-arrivals_price-act"> {{ price }} </span>
        <span className="new-arrivals_price-old"> {{ oldPrice }} </span>
      </div>
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


.new-arrivals_goods-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.new-arrivals_img {
  position: relative;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  width: 11.1vw;
  height: 16vw;
}

.new-arrivals_img-info {
  position: absolute;
  top: 5%;
  left: 5%;
}

.new-arrivals_new {
  text-align: center;
  padding: 4px 14px 4px 14px;
  margin-bottom: 4px;
  width: 43px;
}

.new-arrivals_discount {
  background-color: $discount-color;
  color: white;
  border-radius: 4px;
  padding: 4px 14px 4px 14px;
  margin-bottom: 4px;
}

.new-arrivals_add-button {
  opacity: 0;
  position: absolute;
  bottom: 5%;
  left: 5%;
  font-weight: 500;
  text-align: center;
  align-content: center;
  border-radius: 10px;
  background-color: #141718;
  color: $info-background;
  width: 90%;
  height: 12.5%;
  transition:
    opacity 200ms,
    background-color 600ms;
  &:hover {
    background-color: #3b3f41;
  }
  &:active {
    background-color: #acb6bb;
  }
}

.new-arrivals_description {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: Inter;
  font-weight: 600;
}

.new-arrivals_title {
  font-size: 16px;
  line-height: 26px;
}

.new-arrivals_price {
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 14px;
  line-height: 22px;
}

.new-arrivals_price-old {
  color: $secondary-color;
  font-weight: 400;
  text-decoration: line-through;
}

@media screen and (max-width: 480px) {
  .new-arrivals_goods-item {
    width: fit-content;
  }
}
</style>
