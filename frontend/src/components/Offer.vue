<script setup lang="ts">
import { ref } from 'vue'
const isShown = ref(true)
</script>

<template>
  <div className="offer" id="offer1" v-if="isShown">
    <div></div>
    <div className="offer_center">
      <img className="offer_img" src="../img/icons/offer.svg" />
      <span className="offer_text">30% off storewide — Limited time!</span>
      <span className="offer_link">Shop now &#8594;</span>
    </div>
    <span className="offer_close" @click="isShown = !isShown">×</span>
  </div>
</template>

<style lang="scss" scoped>
$offer-background: #f3f5f7;

.offer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: $offer-background;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  height: 40px;
  padding: 0% 11.1% 0% 11.1%;
}
.offer_center {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25em;
}
.offer_close {
  font-size: 28px;
  font-weight: 300;
}
// .offer {
//   background: #141718;
//   color: #f3f5f7;
// }
// .offer_img {
//   filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(240deg)
//     brightness(105%) contrast(103%);
// }
// .offer_link {
//   color: rgba(255, 171, 0, 0.64);
// }
@media screen and (max-width: 480px) {
  .offer {
    padding: 0;
  }
  .offer_center {
    width: 90%;
    gap: 2%;
  }
}
</style>
