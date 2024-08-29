<script setup lang="ts">
import type { goods } from '../NewArrivalsItem.vue'
import CartGoodsItem from './CartGoodsItem.vue'
import { useGoodsStore } from '@/store'
const store = useGoodsStore()
const cartItems: goods[] = store.goodsCart
</script>

<template>
  <div
    className="cart-goods"
    :style="{ gridTemplateRows: `1fr repeat(${cartItems.length * 3}, 1fr)` }"
  >
    <div className="cart-goods_cols">
      <div className="cart-goods_col-main">Product</div>
      <div className="cart-goods_col-name">Quantity</div>
      <div className="cart-goods_col-name">Price</div>
      <div className="cart-goods_col-name">Subtotal</div>
    </div>
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

<style lang="scss" scoped>
.cart-goods {
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
}
.cart-goods_cols {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
}
.cart-goods_col-main {
  border-bottom: 2px solid rgba(108, 114, 117, 0.5);
  text-align: left;
}
.cart-goods_col-name {
  border-bottom: 2px solid rgba(108, 114, 117, 0.5);
}

@media screen and (max-width: 480px) {
  .cart-goods {
    grid-template-columns: 2fr 1fr;
    margin: 5% 0 5% 0;
    width: 100%;
  }
  .cart-goods_col-main {
    grid-column: span 2;
  }
  .cart-goods_col-name {
    display: none;
  }
}
</style>
