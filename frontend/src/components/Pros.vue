<script setup lang="ts"></script>

<template>
  <div className="pros">
    <div className="pros_item">
      <img className="pros_ico" src="/src/img/icons/fast_delivery.svg" />
      <div className="pros_text">
        <span className="pros_main">Free Shipping</span>
        <span className="pros_sub">Order above $200</span>
      </div>
    </div>
    <div className="pros_item">
      <img className="pros_ico" src="/src/img/icons/money.svg" />
      <div className="pros_text">
        <span className="pros_main">Money-back</span>
        <span className="pros_sub">30 days guarantee</span>
      </div>
    </div>
    <div className="pros_item">
      <img className="pros_ico" src="/src/img/icons/lock.svg" />
      <div className="pros_text">
        <span className="pros_main">Secure Payments</span>
        <span className="pros_sub">Secured by Stripe</span>
      </div>
    </div>
    <div className="pros_item">
      <img className="pros_ico" src="/src/img/icons/call.svg" />
      <div className="pros_text">
        <span className="pros_main">24/7 Support</span>
        <span className="pros_sub">Phone and Email support</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$pros_background: #f3f5f7;
$sub_color: #6c7275;

.pros {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3.3% 11.1% 3.3% 11.1%;
  gap: 1.66%;
}

.pros_item {
  background-color: $pros_background;
  width: 36.4%;
  padding: 6.5% 4.5% 6.5% 4.5%;
  font-family: Poppins;
}

.pros_text {
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  gap: 8px;
}

.pros_main {
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}

.pros_sub {
  color: $sub_color;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

@media screen and (max-width: 480px) {
  .pros {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 200px);
    margin: 10% 5% 10% 5%;
    gap: 20px;
  }
  .pros_item {
    width: auto;
    height: auto;
    padding: 10%;
  }
}
</style>
