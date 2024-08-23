<script lang="ts" setup></script>
<template>
  <div className="description">
    <div className="description_item1">
      Simply Unique<span className="description_back">/</span> Simply Better.
    </div>
    <div className="description_item2">
      <span className="description_label">3legant</span> is a gift & decorations store based in
      HCMC, Vietnam. Est since 2019.
    </div>
  </div>
</template>

<style lang="scss" scoped>
$secondary-color: #6c7275;
$secondary-label: #343839;

.description {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  padding: 0 11.15% 0 11.15%;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
}
.description_item1 {
  font-family: Poppins;
  font-size: 72px;
  font-weight: 500;
  line-height: 76px;
  letter-spacing: -2px;
  text-align: left;
}
.description_back {
  color: $secondary-color;
}
.description_item2 {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  color: $secondary-color;
  padding-right: 48px;
}
.description_label {
  font-weight: 600;
  color: $secondary-label;
}

@media screen and (max-width: 480px) {
  .description {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .description_item1 {
    font-family: Poppins;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -0.4px;
  }
}
</style>
