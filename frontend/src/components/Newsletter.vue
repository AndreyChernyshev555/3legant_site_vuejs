<script setup lang="ts">
interface Props {
  path: string
}

const props = defineProps<Props>()

const backgroundImg: string = window.matchMedia('screen and (max-width: 480px)').matches
  ? 'none'
  : `url(${props.path})`
</script>

<template>
  <div className="newsletter" :style="{ backgroundImage: backgroundImg }">
    <div className="newsletter_block">
      <div className="newsletter_text">
        <div className="newsletter_header">Join Our Nesletter</div>
        <div className="newsletter_desc">Sign up for deals, new products and promotions</div>
      </div>
      <div className="newsletter_form">
        <div className="newsletter_form-left">
          <img :src="'/src/img/icons/email.svg'" />
          <input className="newsletter_form-input" placeholder="Email adress" type="email" />
        </div>
        <span className="newsletter_form-right">Signup</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$secondary-color: #6c7275;
.newsletter {
  background-size: cover;
  padding: 7.05% 33% 7.05% 33%;
}
.newsletter_block {
  background-color: rgba(0, 0, 0, 0);
}
.newsletter_text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.newsletter_header {
  font-family: Poppins;
  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -0.4px;
}
.newsletter_desc {
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  padding-bottom: 20px;
}
.newsletter_form {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 0.5px #afb3b5;
  padding-top: 20px;
  padding-bottom: 10px;
  color: $secondary-color;
  width: 100%;
}

.newsletter_form-left {
  display: flex;
  flex-direction: row;
  gap: 2.5%;
  width: 85%;
}

.newsletter_form-right {
  width: 15%;
}

.newsletter_form-input {
  border: 0;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.4px;
  width: 90%;
  background-color: rgba(0, 0, 0, 0);
  &:focus {
    outline: none;
  }
}
</style>
