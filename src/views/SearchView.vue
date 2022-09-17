<script setup>

</script>

<template>
  <div class="py-2 border-bottom border-3 border-black">
    <div class="search-banner"></div>
  </div>
  <div class="bg-white py-7">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="bg-secondary rounded-1 p-6 shadow">
                    <div class="mb-6">
                        <div class="d-flex">
                            <span class="mdi mdi-silverware-fork-knife text-lg-40 text-base me-4"></span>
                            <div class="">
                                <h2 class="text-lg-24 fw-bold">類別</h2>
                                <p class="text-justify text-lg-12 text-center">TYPE</p>
                            </div>
                        </div>
                        <hr class="mb-3 mt-0">
                        <ul class="row gy-2">
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">中式美食</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">日式美食</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">義式美食</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">美式美食</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">泰式美食</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6">
                        <div class="d-flex">
                            <span class="mdi mdi-star text-lg-40 text-base me-4"></span>
                            <div class="">
                                <h2 class="text-lg-24 fw-bold">特點</h2>
                                <p class="text-justify text-lg-12 text-center">TYPE</p>
                            </div>
                        </div>
                        <hr class="mb-3 mt-0">
                        <ul class="row gy-3">
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">味道好</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">賣相佳</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">環境好</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">服務棒</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">CP高</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <div class="d-flex">
                            <span class="mdi mdi-cash-multiple text-lg-40 text-base me-4"></span>
                            <div class="">
                                <h2 class="text-lg-24 fw-bold">價格</h2>
                                <p class="text-justify text-lg-12 text-center">PRICE</p>
                            </div>
                        </div>
                        <hr class="mb-3 mt-0">
                        <ul>
                            <li>
                                <a href="#" class="category-btn">
                                    <p class="text-lg-20">150元以下</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="bg-primary p-4 rounded-1 mb-4 shadow">
                    <form action="">
                        <div class="row gy-2">
                            <div class="col-lg-3">
                                <div class="search-form-item">
                                    <label for="searchArea" class="form-label">地區</label>
                                    <select class="form-control" name="" id="searchArea">
                                        <option>台中市西區</option>
                                    </select>
                                    <img src="/src/assets/images/icon-arrow.png" alt="" class="search-icon">
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="search-form-item">
                                    <label for="searchArea" class="form-label">類別</label>
                                    <select class="form-control" name="" id="searchArea">
                                        <option>中式美食</option>
                                    </select>
                                    <img src="/src/assets/images/icon-arrow.png" alt="" class="search-icon">
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="search-form-item">
                                    <label for="searchArea" class="form-label">特點</label>
                                    <select class="form-control" name="" id="searchArea">
                                        <option>CP高</option>
                                    </select>
                                    <img src="/src/assets/images/icon-arrow.png" alt="" class="search-icon">
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="search-form-item">
                                    <label for="searchArea" class="form-label">價格</label>
                                    <select class="form-control" name="" id="searchArea">
                                        <option>150元以下</option>
                                    </select>
                                    <img src="/src/assets/images/icon-arrow.png" alt="" class="search-icon">   
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <label for="searchKeyword" class="form-label">關鍵字</label>
                                <input type="text" class="form-control" name="" id="searchKeyword" aria-describedby="helpId" placeholder="">
                            </div>
                        </div>
                    </form>
                </div>
                <ul class="row gy-5">
                    <li class="col-lg-4">
                        <router-link to="/store" class="restaurants-card">
                            <div class="restaurant-pic">
                                <img src="/src/assets/images/restaurant-7.jpg" alt="" class="w-100 h-100">
                            </div>
                            <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                                <h3 class="text-16 mb-1 text-center fw-bold">我是店家名稱最多十六個字補字補字</h3>
                                <p class="text-base text-center mb-4">中式美食 | 台中西區</p>
                                <div class="feature-tag-wrapper d-flex justify-content-between">
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-camera text-center"></span>
                                    <p class="fw-bold text-center">賣相佳</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-room-service text-center"></span>
                                    <p class="fw-bold text-center">服務棒</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-food text-center"></span>
                                    <p class="fw-bold text-center">味道好</p>
                                </a>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="col-lg-4">
                        <router-link to="/store" class="restaurants-card">
                            <div class="restaurant-pic">
                                <img src="/src/assets/images/restaurant-8.jpg" alt="" class="w-100 h-100">
                            </div>
                            <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                                <h3 class="text-16 mb-1 text-center fw-bold">我是店家名稱最多十六個字補字補字</h3>
                                <p class="text-base text-center mb-4">中式美食 | 台中西區</p>
                                <div class="feature-tag-wrapper d-flex justify-content-between">
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-camera text-center"></span>
                                    <p class="fw-bold text-center">賣相佳</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-room-service text-center"></span>
                                    <p class="fw-bold text-center">服務棒</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-food text-center"></span>
                                    <p class="fw-bold text-center">味道好</p>
                                </a>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="col-lg-4">
                        <router-link to="/store" class="restaurants-card">
                            <div class="restaurant-pic">
                                <img src="/src/assets/images/restaurant-10.jpg" alt="" class="w-100 h-100">
                            </div>
                            <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                                <h3 class="text-16 mb-1 text-center fw-bold">我是店家名稱最多十六個字補字補字</h3>
                                <p class="text-base text-center mb-4">中式美食 | 台中西區</p>
                                <div class="feature-tag-wrapper d-flex justify-content-between">
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-camera text-center"></span>
                                    <p class="fw-bold text-center">賣相佳</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-room-service text-center"></span>
                                    <p class="fw-bold text-center">服務棒</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-food text-center"></span>
                                    <p class="fw-bold text-center">味道好</p>
                                </a>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="col-lg-4">
                        <router-link to="/store" class="restaurants-card">
                            <div class="restaurant-pic">
                                <img src="/src/assets/images/restaurant-10.jpg" alt="" class="w-100 h-100">
                            </div>
                            <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                                <h3 class="text-16 mb-1 text-center fw-bold">我是店家名稱最多十六個字補字補字</h3>
                                <p class="text-base text-center mb-4">中式美食 | 台中西區</p>
                                <div class="feature-tag-wrapper d-flex justify-content-between">
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-camera text-center"></span>
                                    <p class="fw-bold text-center">賣相佳</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-room-service text-center"></span>
                                    <p class="fw-bold text-center">服務棒</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-food text-center"></span>
                                    <p class="fw-bold text-center">味道好</p>
                                </a>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="col-lg-4">
                        <router-link to="/store" class="restaurants-card">
                            <div class="restaurant-pic">
                                <img src="/src/assets/images/restaurant-11.jpg" alt="" class="w-100 h-100">
                            </div>
                            <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                                <h3 class="text-16 mb-1 text-center fw-bold">我是店家名稱最多十六個字補字補字</h3>
                                <p class="text-base text-center mb-4">中式美食 | 台中西區</p>
                                <div class="feature-tag-wrapper d-flex justify-content-between">
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-camera text-center"></span>
                                    <p class="fw-bold text-center">賣相佳</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-room-service text-center"></span>
                                    <p class="fw-bold text-center">服務棒</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-food text-center"></span>
                                    <p class="fw-bold text-center">味道好</p>
                                </a>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="col-lg-4">
                        <router-link to="/store" class="restaurants-card">
                            <div class="restaurant-pic">
                                <img src="/src/assets/images/restaurant-12.jpg" alt="" class="w-100 h-100">
                            </div>
                            <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                                <h3 class="text-16 mb-1 text-center fw-bold">我是店家名稱最多十六個字補字補字</h3>
                                <p class="text-base text-center mb-4">中式美食 | 台中西區</p>
                                <div class="feature-tag-wrapper d-flex justify-content-between">
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-camera text-center"></span>
                                    <p class="fw-bold text-center">賣相佳</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-room-service text-center"></span>
                                    <p class="fw-bold text-center">服務棒</p>
                                </a>
                                <a href="#" class="feature-tag text-12 text-black border border-base py-1 px-4">
                                    <span class="d-block mdi mdi-food text-center"></span>
                                    <p class="fw-bold text-center">味道好</p>
                                </a>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="py-5">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                          <label for="displayNum" class="d-block form-label text-lg-20 text-nowrap me-3 mb-0">每頁顯示數量</label>
                          <select class="form-control" name="" id="displayNum">
                            <option>6</option>
                            <option>12</option>
                          </select>
                        </div>
                        <div class="d-flex">
                            <span class="pagination-btn mdi mdi-chevron-left text-lg-20 lh-1 px-3 me-2"></span>
                            <a href="#" class="pagination-btn text-lg-20 lh-1 px-4 me-2">1</a>
                            <a href="#" class="pagination-btn text-lg-20 lh-1 px-4 me-2">2</a>
                            <a href="#" class="pagination-btn text-lg-20 lh-1 px-4 me-2">3</a>
                            <a href="#" class="pagination-btn text-lg-20 lh-1 px-4 me-2">4</a>
                            <span class="pagination-btn mdi mdi-chevron-right text-lg-20 lh-1 px-3"></span>
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
