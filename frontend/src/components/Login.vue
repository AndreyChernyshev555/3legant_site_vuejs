<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>

<template>
  <div className="enter-page">
    <div className="enter-page_logo">
      <div className="enter-page_logo-img" />
      <div className="enter-page_logo-text">3legant.</div>
    </div>
    <div className="enter-block">
      <div className="enter-block_head">
        <span className="enter-block_head-title">Sign up</span>
        <span className="enter-block_head-text">
          Already have an account?&nbsp;
          <a className="enter-block_head-link">Sign in</a>
        </span>
      </div>
      <form className="enter-block_form">
        <input className="enter-block_form-field" placeholder="Your name" />
        <input className="enter-block_form-field" placeholder="Username" />
        <input className="enter-block_form-field" placeholder="Email address" />
        <input className="enter-block_form-field" type="password" placeholder="Password" />
        <div className="enter-block_agreement">
          <input
            className="enter-block_agreement-box"
            type="checkbox"
            id="agreement"
            names="agreement"
          />
          <label className="enter-block_agreement-text" for="agreement">
            I agree with&nbsp;
            <a className="enter-block_agreement-link"> Privacy Policy </a>
            &nbsp;and&nbsp;
            <a className="enter-block_agreement-link"> Terms of Use </a>
          </label>
        </div>
      </form>
      <button className="enter-block_button" @click="router.push({ name: 'home1' })">
        Sign up
      </button>
    </div>
  </div>
</template>

<style scoped>
.margin-zero {
  margin: 0;
  width: 100%;
}
.enter-page {
  display: flex;
  flex-direction: row;
  width: 75%;
  margin-left: 12.5%;
  margin-right: 12.5%;
}
.enter-page_logo {
  min-width: 40%;
  background-color: #f3f5f7;
  position: relative;
}
.enter-page_logo-img {
  background: url('@/img/main_img_left.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
.enter-page_logo-text {
  position: absolute;
  top: 3%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
}
.enter-block {
  display: flex;
  flex-direction: column;
  gap: 6%;
  width: 55%;
  padding: 15.5% 12% 16% 8%;
}
.enter-block_head {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.enter-block_head-title {
  font-family: Poppins;
  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -0.4px;
  text-align: left;
}
.enter-block_head-text {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  color: #6c7275;
}
.enter-block_head-link {
  color: #38cb89;
  font-weight: 600;
}
.enter-block_form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Inter;
  gap: 32px;
}
.enter-block_form-field {
  border: 0;
  border-bottom: 2px solid #e8ecef;
  height: 40px;
  transition: border-bottom 0.5s;
}
.enter-block_form-field:focus {
  outline: none;
  border-bottom: 2px solid black;
}
.enter-block_agreement {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.75%;
}

.enter-block_agreement-box {
  width: 5.3%;
  height: 80%;
  margin: 0;
  padding: 0;
  border: 0;
}

.enter-block_agreement-text {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  color: #6c7275;
  width: 350px;
}

.enter-block_agreement-link {
  font-weight: 600;
  color: black;
}

.enter-block_button {
  padding: 2% 8% 2% 8%;
  border: 0;
  border-radius: 8px;
  height: 7%;
  color: white;
  background-color: black;
  transition-property: background-color;
  transition-duration: 0.2s;
}

.enter-block_button:hover {
  background-color: #7d542e;
}

@media screen and (max-width: 640px) {
  .enter-page {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  .enter-page_logo {
    min-width: 100%;
    height: 400px;
    content: '';
  }
  .enter-page_logo-img {
    background-image: url('../img/main_img_top.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .enter-page_logo-text {
    position: absolute;
    top: 10%;
  }
  .enter-block {
    width: auto;
    padding: 8%;
    gap: 96px;
  }
  .enter-block_head {
    gap: 96px;
  }
  .enter-block_form-field {
    padding-top: 1%;
    padding-bottom: 40px;
    margin-bottom: 40px;
  }
  .enter-block_agreement-text {
    font-size: 14px;
  }
}
</style>
