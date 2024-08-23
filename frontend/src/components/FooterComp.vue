<script setup lang="ts"></script>

<template>
  <div className="footer">
    <div className="footer_navigation">
      <div className="footer_company">
        <div className="footer_company-logo">3legant<span>.</span></div>
        <div className="footer_company-caption">Gift & Decoration Store</div>
      </div>
      <div className="footer_nav-buttons">
        <span>Home</span>
        <span>Shop</span>
        <span>Product</span>
        <span>Blog</span>
        <span>Contact Us</span>
      </div>
    </div>
    <div className="footer_sources">
      <div className="footer_copyright">
        <div className="footer_copyright-text">Copyright © 2023 3legant. All rights reserved</div>
        <div className="footer_copyright-policy">Privacy Policy</div>
        <div className="footer_copyright-terms">Terms of Use</div>
      </div>
      <div className="footer_social">
        <img src="@/img/icons/instagram.svg" />
        <img src="@/img/icons/facebook.svg" />
        <img src="@/img/icons/youtube.svg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  padding: 80px 11.1% 32px 11.1%;
  gap: 49px;
  color: white;
  background-color: #141718;
}

.footer_company {
  display: flex;
  flex-direction: row;
}

.footer_navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer_company-logo {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  padding-right: 30px;
  border-right: solid 0.5px #6c7275;
}

.footer_company-caption {
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-left: 30px;
}

.footer_nav-buttons {
  display: flex;
  flex-direction: row;
  gap: 40px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  a:link {
    color: white;
    text-decoration: none;
  }
  a:visited {
    color: white;
    text-decoration: none;
  }
}

.footer_sources {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: solid 0.5px #404446;
  padding-top: 15px;
}

.footer_copyright {
  display: flex;
  flex-direction: row;
  gap: 28px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
}

.footer_copyright-text {
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}

.footer_social {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

@media screen and (max-width: 480px) {
  .footer {
    padding: 5%;
    background: #232627;
  }
  .footer_navigation,
  .footer_company {
    flex-direction: column;
  }
  .footer_company-logo {
    text-align: center;
    padding-right: 0;
    padding-bottom: 10px;
    border-right: 0;
    border-bottom: solid 0.5px #6c7275;
  }
  .footer_company-caption {
    padding: 10px 0px 0px 0px;
    text-align: center;
  }
  .footer_nav-buttons {
    padding-top: 40px;
    flex-direction: column;
    text-align: center;
  }
  .footer_sources {
    gap: 20px;
    align-items: center;
    flex-direction: column-reverse;
  }
  .footer_copyright {
    align-items: center;
    flex-direction: column-reverse;
  }
}
</style>
