<script setup lang="ts">
import type { goods } from '../NewArrivalsItem.vue'
import { useStore } from 'vuex'

interface Props {
  cartItem: goods
}

const props = defineProps<Props>()
const store = useStore()
</script>

<template>
  <div>
    <div className="cart-goods_item">
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
        <div
          className="cart-goods_item-remove"
          @click="
            () => {
              store.dispatch('removeGoods', cartItem)
            }
          "
        >
          ✕ Remove
        </div>
      </div>
    </div>
    <div className="cart-goods_item-quantity">
      <div
        className="cart-goods_item-button"
        @click="
          () => {
            store.dispatch('decrementGoods', cartItem)
          }
        "
      >
        -
      </div>
      <div className="cart-goods_item-quantity-value">{{ cartItem.amount }}</div>
      <div
        className="cart-goods_item-button"
        @click="
          () => {
            store.dispatch('addGoods', cartItem)
          }
        "
      >
        +
      </div>
    </div>
    <div className="cart-goods_item-price">{{ cartItem.price }}</div>
    <div className="cart-goods_item-subtotal">
      {{ `$${(Number(cartItem.price.slice(1)) * cartItem.amount).toFixed(2)}` }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
