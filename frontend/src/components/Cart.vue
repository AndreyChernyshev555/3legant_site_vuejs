<script setup lang="ts">
import Head from './Head.vue'
import CartGoods from './CartComps/CartGoods.vue'
import FooterComp from './FooterComp.vue'
</script>

<template>
  <div>
    <Head />
    <div className="cart">
      <div className="cart-text">Cart</div>
      <div className="cart-content">
        <CartGoods />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.cart {
  font-family: Poppins;
  font-size: 54px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: -1px;
  text-align: center;
  width: 77.8%;
  margin: 0 11.1% 0 11.1%;
}
.cart-text {
  padding: 7% 14% 4% 14%;
}
.cart-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
  grid-gap: 2.5%;
  align-items: start;
  height: fit-content;
  margin-bottom: 5%;
}

@media screen and (max-width: 480px) {
  .cart {
    font-family: Poppins;
    font-size: 40px;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: -0.4px;
  }
  .cart-content {
    display: flex;
    flex-direction: column;
  }
}
</style>
