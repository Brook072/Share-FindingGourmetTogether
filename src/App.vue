<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-primary">
    <div class="container">
      <div class="header-wrapper d-flex align-items-center justify-content-between">
        <a href="/">
          <img src="/src/assets/images/logo.png" alt="" class="share-logo">
        </a>
        <nav class="nav d-none d-lg-flex justify-content-center">
          <a class="nav-link border border-base py-3 px-6 me-4" href="#">活動/公告</a>
          <a class="nav-link border border-base py-3 px-6 me-4" href="#">來點驚喜</a>
          <a class="nav-link border border-base py-3 px-6" href="#">登入/註冊</a>
        </nav>
        <span class="mdi mdi-menu d-block d-lg-none text-28 text-base" data-bs-toggle="collapse" data-bs-target=".nav-sm"></span>
      </div>
    </div>
    <nav class="nav-sm d-lg-none bg-base collapse">
      <a class="nav-link-sm text-white border-bottom border-white text-center w-100 py-4" href="#">活動/公告</a>
      <a class="nav-link-sm text-white border-bottom border-white text-center w-100 py-4" href="#">來點驚喜</a>
      <a class="nav-link-sm text-white border-bottom border-white text-center w-100 py-4" href="#">登入/註冊</a>
    </nav>
  </header>

  <RouterView />

  <footer class="bg-base py-5 pt-lg-9">
    <div class="container">
      <div class="row flex-column flex-lg-row align-items-center justify-content-lg-end">
        <div class="col-4">
          <div class="footer-logo-wrapper mx-auto mb-5 mb-lg-0 p-0">
            <img src="/src/assets/images/footer-logo.png" alt="" class="w-100">
          </div>
        </div>
        <div class="contact-info-wrapper col-6">
          <div class="contact-info">
            <h3 class="contact-info-item text-white text-20 text-lg-28 fw-bold mb-5">聯絡資訊 - CONTACT</h3>
            <a href="mailto:Service@Share.com.tw" class="contact-info-item d-block text-white text-12 text-lg-20 mb-4">服務信箱：Service@Share.com.tw</a>
            <a href="tel:+800-XXX-XXX" class="contact-info-item d-block text-white text-12 text-lg-20 mb-4">免付費服務電話：0800-XXX-XXX</a>
            <p class="contact-info-item text-white text-12 text-lg-20 mb-5">服務時間：周一至周五 09:30 - 17:30</p>
            <div class="social-logo-wrapper d-flex justify-content-evenly justify-content-lg-between mb-5">
              <a href="" class="social-logo">
                <img src="/src/assets/images/icon-youtube.png" alt="" class="w-100">
              </a>
              <a href="" class="social-logo">
                <img src="/src/assets/images/icon-ig.png" alt="" class="w-100">
              </a>
              <a href="" class="social-logo">
                <img src="/src/assets/images/icon-fb.png" alt="" class="w-100">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-white text-12 text-center pt-lg-5">Copyright @ 2022 紛饗.All rights reserved.</p>
  </footer>
</template>

<style lang="scss">
@import './assets/all';
</style>
