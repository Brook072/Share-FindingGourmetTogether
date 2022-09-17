<script setup>
  
</script>

<template>
  <header class="bg-primary border-bottom border-3 border-black">
    <div class="container">
      <div class="header-wrapper d-flex align-items-center justify-content-between">
        <h1 v-if="$route.path === '/'">
          <router-link to="/" class="share-logo"></router-link>
        </h1>
        <router-link v-else to="/" class="share-logo"></router-link>
        <nav class="nav d-none d-lg-flex justify-content-center">
          <router-link to='/bulletin' class="nav-link py-3 px-6 me-4">活動/公告</router-link>
          <a class="nav-link py-3 px-6 me-4" href="#">來點驚喜</a>
          <router-link to="/login" class="nav-link py-3 px-6">登入/註冊</router-link>
        </nav>
        <span class="mdi mdi-menu d-block d-lg-none text-28 text-base" data-bs-toggle="collapse" data-bs-target=".nav-sm"></span>
      </div>
    </div>
    <nav class="nav-sm d-lg-none bg-base collapse">
      <router-link to='/bulletin' class="nav-link-sm text-white border-bottom border-white text-center w-100 py-4">活動/公告</router-link>
      <a class="nav-link-sm text-white border-bottom border-white text-center w-100 py-4" href="#">來點驚喜</a>
      <router-link to="/login" class="nav-link-sm text-white border-bottom border-white text-center w-100 py-4">登入/註冊</router-link>
    </nav>
  </header>
</template>
