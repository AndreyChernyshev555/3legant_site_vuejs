<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useGoodsStore } from '@/store'
import { computed } from 'vue'
const router = useRouter()
const route = useRoute()
const store = useGoodsStore()
const amount = computed(() => store.goodsCart.length)
</script>

<template>
  <div className="head">
    <div className="head_logo">
      <img className="head_menu" src="../img/icons/menu.svg" />
      3legant.
    </div>
    <div className="head_section-block">
      <span className="head_section" @click="router.push({ name: 'home1' })">Home</span>
      <span className="head_section">Shop</span>
      <span className="head_section">Product</span>
      <span className="head_section">Contact us</span>
    </div>
    <div className="head_buttons-block">
      <img className="head_button" src="../img/icons/search.svg" />
      <img className="head_button" src="../img/icons/user.svg" />
      <div className="head_cart">
        <img
          className="head_button"
          src="../img/icons/cart.svg"
          @click="router.push({ name: 'cart' })"
        />
        <div className="head_indicator" :style="{ display: amount > 0 ? 'block' : 'none' }">
          {{ amount }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$info-background: #f3f5f7;
$secondary-color: #6c7275;

.head {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 11.15% 0 11.15%;
  align-items: center;
  height: 60px;
  line-height: 24px;
  text-align: center;
  background-color: white;
  color: #6c7275;
}
.head_logo {
  font-family: Poppins;
  color: #141718;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
}
.head_menu {
  display: none;
}
.head_section-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  font-family: Space Grotesk;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
}
.head_section {
  transition: color, 0.2s;
  &:hover {
    color: black;
  }
}
.head_buttons-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.head_cart {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.head_indicator {
  background-color: #141718;
  color: $info-background;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
}

@media screen and (max-width: 480px) {
  .head_logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10%;
  }
  .head_menu {
    display: block;
    height: 18px;
  }
  .head_section-block {
    display: none;
  }
}
</style>
