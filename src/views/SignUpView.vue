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
                        <div class="row-lg flex-lg-column justify-content-center py-7">
                            <h2 class="text-lg-40 text-center fw-bold mb-lg-5">歡迎加入一同紛饗！</h2>
                            <div class="col-8 bg-white rounded-3 mx-lg-auto py-lg-8 px-lg-6">
                                <form>
                                    <div class="mb-5">
                                        <label for="SignUpEmail" class="form-label text-lg-28">電子信箱</label>
                                        <input type="email" class="form-control text-lg-28" id="SignUpEmail" placeholder="請輸入電子郵件">
                                    </div>
                                    <div class="mb-5">
                                        <label for="UserName" class="form-label text-lg-28">使用者名稱</label>
                                        <input type="text" class="form-control text-lg-28" id="UserName" placeholder="請輸入使用者名稱">
                                    </div>
                                    <div class="mb-5">
                                        <label for="SignUpPassword" class="form-label text-lg-28">密碼</label>
                                        <input type="password" class="form-control text-lg-28" id="SignUpPassword" placeholder="請輸入密碼">
                                    </div>
                                    <div class="mb-5">
                                        <label for="PasswordConfirm" class="form-label text-lg-28">密碼</label>
                                        <input type="password" class="form-control text-lg-28" id="PasswordConfirm" placeholder="請再次輸入密碼">
                                    </div>
                                    <div class="mb-5">
                                        <button type="submit" class="btn btn-primary w-100 text-lg-28 py-4">註冊</button>
                                    </div>
                                    <hr>
                                    <router-link to="/login" class="btn btn-warning w-100 text-lg-28 py-4">取消</router-link>
                                </form>
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
