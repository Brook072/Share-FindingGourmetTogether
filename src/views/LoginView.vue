<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-primary py-lg-10">
    <div class="login-bg w-100 h-100">
        <div class="d-flex align-items-center justify-content-end h-100">
            <div class="w-50">
                <div class="ps-lg-10">
                    <div class="pt-6">
                        <router-link to="/" class="d-lg-flex align-items-center justify-content-center mx-lg-auto">
                            <div class="login-logo me-5"></div>
                            <p class="text-lg-60 text-base fw-bold">分享好時機!</p>
                        </router-link>
                    </div>
                    <div class="w-100">
                        <div class="row-lg flex-lg-column justify-content-center py-5">
                            <h2 class="text-lg-40 text-center fw-bold mb-lg-5">呷霸沒？</h2>
                            <div class="col-8 bg-white rounded-3 mx-lg-auto py-lg-8 px-lg-6">
                                <form>
                                    <div class="mb-5">
                                        <label for="LoginEmail" class="form-label text-lg-28">帳號/電子信箱</label>
                                        <input type="email" class="form-control text-lg-28" id="LoginEmail" placeholder="請輸入電子郵件">
                                    </div>
                                    <div class="mb-5">
                                        <label for="LoginPassword" class="form-label text-lg-28">密碼</label>
                                        <input type="password" class="form-control text-lg-28" id="LoginPassword" placeholder="請輸入密碼">
                                    </div>
                                    <div class="mb-5">
                                        <button type="submit" class="btn btn-primary w-100 text-lg-28 py-4">登入</button>
                                    </div>
                                </form>
                                <hr class="mb-5">
                                <div class="btn-wrapper">
                                    <router-link to="/signup" class="btn btn-secondary w-100 text-lg-28 py-4">註冊</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style>

</style>
