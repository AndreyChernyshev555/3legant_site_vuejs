<script setup lang="ts">
import type { goods } from '../NewArrivalsItem.vue'
import { useGoodsStore } from '@/store'

interface Props {
  cartItem: goods
}

const props = defineProps<Props>()
const store = useGoodsStore()
const handleRemoveClick = () => {
  store.removeGoods(props.cartItem)
}
const handleDecrementClick = () => {
  store.decrementGoods(props.cartItem)
}
const handleAddClick = () => {
  store.addGoods(props.cartItem)
}
</script>

<template>
  <div className="cart-goods_item">
    <div className="cart-goods_item-main">
      <div
        className="cart-goods_item-img"
        :style="{
          background: `url(${cartItem.path})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }"
      ></div>
      <div className="cart-goods_item-text">
        <div className="cart-goods_item-name">{{ cartItem.title }}</div>
        <div className="cart-goods_item-color">Color: default</div>
        <div className="cart-goods_item-remove" @click="handleRemoveClick">✕ Remove</div>
      </div>
    </div>
    <div className="cart-goods_item-quantity">
      <div className="cart-goods_item-button" @click="handleDecrementClick">-</div>
      <div className="cart-goods_item-quantity-value">{{ cartItem.amount }}</div>
      <div className="cart-goods_item-button" @click="handleAddClick">+</div>
    </div>
    <div className="cart-goods_item-price">{{ cartItem.price }}</div>
    <div className="cart-goods_item-subtotal">
      {{ `$${(Number(cartItem.price.slice(1)) * cartItem.amount).toFixed(2)}` }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-goods_item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
  height: 15vw;
}
.cart-goods_item-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}
.cart-goods_item-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
}
.cart-goods_item-color {
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #6c7275;
}
.cart-goods_item-remove {
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #6c7275;
}
.cart-goods_item-quantity {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20%;
  border: 1px solid #6c7275;
  border-radius: 5px;
  align-items: center;
  margin: 0 20% 0 20%;
  height: 2vw;
}
.cart-goods_item-price {
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
}
.cart-goods_item-subtotal {
  @extend .cart-goods_item-price;
  font-weight: 600;
}
.cart-goods_item-name {
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
}
@media screen and (max-width: 480px) {
  .cart-goods_item {
    grid-row: span 3;
    align-items: center;
  }
}
</style>
