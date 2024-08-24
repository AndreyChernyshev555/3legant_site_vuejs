<script setup lang="ts"></script>

<template>
  <div className="info2">
    <img className="info2_img" src="/src/img/paste1.png" />
    <div className="info2_offer">
      <div className="info2_offer-sale-up">SALE UP TO 35% OFF</div>
      <div className="info2_offer-head">HUNDREDS of New lower prices!</div>
      <div className="info2_offer-desc">
        It’s more affordable than ever to give every room in your home a stylish makeover
      </div>
      <div className="info2_offer-link">
        <span>Shop Now &#8594;</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$info-background: #f3f5f7;
$secondary-color: #6c7275;
$blue-accent: #377dff;
.info2 {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.info2_img {
  width: 50%;
}

.info2_offer {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: $info-background;
  padding: 8.33% 8.33% 5.2% 5.2%;
}
.info2_offer-sale-up {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: $blue-accent;
}
.info2_offer-head {
  font-family: Poppins;
  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -0.4px;
}
.info2_offer-desc {
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
}
.info2_offer-link {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.4;
  a:link {
    color: black;
  }
  a:visited {
    color: $secondary-color;
  }
}
</style>
