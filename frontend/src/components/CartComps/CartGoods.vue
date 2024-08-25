<script setup lang="ts">
import { useStore } from 'vuex'
import type { goods } from '../NewArrivalsItem.vue'
import CartGoodsItem from './CartGoodsItem.vue'
const store = useStore()
const cartItems: goods[] = store.state.goodsCart
console.log(cartItems)
</script>

<template>
  <div
    className="cart-goods"
    :style="{ gridTemplateRows: `1fr repeat(${cartItems.length * 3}, 1fr)` }"
  >
    <div className="cart-goods_col-main">Product</div>
    <div className="cart-goods_col-name">Quantity</div>
    <div className="cart-goods_col-name">Price</div>
    <div className="cart-goods_col-name">Subtotal</div>
    <CartGoodsItem v-for="i in cartItems.length" :key="i" :cartItem="cartItems[i - 1]" />
    <div
      className="cart-goods_empty"
      :style="{
        gridColumn: 'span 4'
      }"
      v-if="cartItems.length == 0"
    >
      There are no items yet
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
