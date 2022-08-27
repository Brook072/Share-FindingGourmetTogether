<script>
  import {ref} from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const commonBothers = ref([
        {id:1, src:'/src/assets/images/bother-1.png', html:'一群人看評價搞成多人大型踩地雷現場'},
        {id:2, src:'/src/assets/images/bother-2.png', html:'只想下班好好吃個一餐<br>但總會弄成皇帝選妃'},
        {id:3, src:'/src/assets/images/bother-3.png', html:'記不起來上次那間很好吃的店在哪裡'},
        {id:4, src:'/src/assets/images/bother-4.png', html:'都打到骨折了客人還是不知道這裡有間店'}
      ])
      return {
        commonBothers,
        modules: [Navigation],
      };
    },
  };
</script>

<template>
  <main>
    <div class="banner d-flex flex-column justify-content-center pt-7 pb-8">
      <div class="container">
        <div class="row flex-column flex-lg-row-reverse align-items-lg-center">
          <div class="mb-7 col-lg-6">
            <h2 class="banner-slogan text-32 text-lg-60 text-base fw-bold mb-3 mb-lg-5">It’s time to share!</h2>
            <p class="banner-slogan text-20 text-lg-40 text-base fw-bold">與你一同發現美食的好地方</p>
          </div>
          <div class="col-lg-6">
            <div class="search-form bg-primary p-5 col-lg-6">
              <p class="text-base text-20 text-center fw-bold">快速搜尋</p>
              <form action="" method="post">
                <ul class="row gy-3 gx-4 mb-3">
                  <li class="search-form-item col-12">
                    <label for="search-area" class="form-label mb-1">地區</label>
                    <select class="form-control" name="" id="search-area">
                      <option>台中西區</option>
                    </select>
                    <img src="/src/assets/images/icon-arrow.png" alt="" class="search-icon">
                  </li>
                  <li class="search-form-item col-6">
                    <label for="search-type" class="form-label mb-1">類別</label>
                    <select class="form-control" name="" id="search-type">
                      <option class="text-base">中式美食</option>
                    </select>
                    <img src="/src/assets/images/icon-arrow.png" alt="" class="search-icon">
                  </li>
                  <li class="search-form-item col-6">
                    <label for="search-feature" class="form-label mb-1">特點</label>
                    <select class="form-control" name="" id="search-feature">
                      <option>CP高</option>
                    </select>
                    <img src="/src/assets/images/icon-arrow.png" alt="" class="search-icon">
                  </li>
                  <li class="search-form-item col-12">
                    <label for="search-price" class="form-label mb-1">價格</label>
                    <select class="form-control" name="" id="search-price">
                      <option>150元以下</option>
                    </select>
                    <img src="/src/assets/images/icon-arrow.png" alt="" class="search-icon">
                  </li>
                  <li class="search-form-item col-12">
                    <label for="search-keyword" class="form-label mb-1">關鍵字</label>
                    <input type="text" class="form-control" name="" id="search-keyword" placeholder="輸入豬排、火鍋等...">
                  </li>
                </ul>
              </form>
              <a href="" class="search-btn">
                <i class="ai-search text-white text-24 lh-1"></i>
                <span class="text-white">搜尋</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="common-bother py-7">
      <div class="container">
        <h2 class="text-base text-20 text-lg-28 text-center fw-bold mb-5">吃個飯總是遇到以下狀況?</h2>
        <ul class="row flex-column flex-lg-row align-items-center align-items-lg-start gy-5 gy-lg-0 gx-0 gx-lg-5">
          <li :key="id" v-for="{id, src, html} in commonBothers" class="col-lg-3">
            <div class="bother-pic">
              <img :src="src" alt="" class="w-100 mb-2 mb-lg-5">
            </div>
            <p v-html="html" class="bother-text text-base text-12 text-lg-16 text-center"></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="slogan d-flex flex-column align-items-center justify-content-center">
      <h2 class="text-white text-center text-28 text-lg-60 fw-bold mb-3">歡迎來到紛饗！</h2>
      <p class="text-white text-center text-16 text-lg-28">我的美食，我來掌握！</p>
    </div>
    <div class="restaurant-list py-7">
      <div class="container">
        <div class="mb-5">
          <h2 class="text-base text-28 text-center fw-bold mb-2 col-lg-12">迫不及待</h2>
          <p class="text-base text-20 text-center fw-bold">這次你要選哪間？</p>
        </div>
        <div class="restaurant-list-tab-wrapper d-flex justify-content-between mb-5">
          <div>
            <a href="#" class="restaurant-list-tab text-center">在你附近</a>
          </div>
          <div>
            <a href="#" class="restaurant-list-tab text-center">好評如潮</a>
          </div>
          <div>
            <a href="#" class="restaurant-list-tab text-center">給我驚喜</a>
          </div>
        </div>
        <swiper 
          class="pb-4"
          :slidesPerView=1
          :navigation="{
            nextEl: '.mdi.mdi-chevron-right',
            prevEl: '.mdi.mdi-chevron-left'
            }"
          :breakpoints="{
            '1400':{
              slidesPerView: 3,
              slidesPerGroup: 3
            }
          }"
          :modules="modules"
          >
          <swiper-slide>
            <a href="#" class="restaurants-card">
              <div class="restaurant-pic">
                <img src="/src/assets/images/restaurant-1.png" alt="" class="">
              </div>
              <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                <h3 class="text-16 mb-1">我是店家名稱最多十六個字我是店家名</h3>
                <p class="text-base text-center mb-4">店家地區 | 店家類型</p>
                <div class="restaurant-feature-wrapper d-flex justify-content-between">
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#" class="restaurants-card">
              <div class="restaurant-pic">
                <img src="/src/assets/images/restaurant-1.png" alt="" class="">
              </div>
              <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                <h3 class="text-16 mb-1">我是店家名稱最多十六個字我是店家名</h3>
                <p class="text-base text-center mb-4">店家地區 | 店家類型</p>
                <div class="restaurant-feature-wrapper d-flex justify-content-between">
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#" class="restaurants-card">
              <div class="restaurant-pic">
                <img src="/src/assets/images/restaurant-1.png" alt="" class="">
              </div>
              <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                <h3 class="text-16 mb-1">我是店家名稱最多十六個字我是店家名</h3>
                <p class="text-base text-center mb-4">店家地區 | 店家類型</p>
                <div class="restaurant-feature-wrapper d-flex justify-content-between">
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#" class="restaurants-card">
              <div class="restaurant-pic">
                <img src="/src/assets/images/restaurant-1.png" alt="" class="">
              </div>
              <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                <h3 class="text-16 mb-1">我是店家名稱最多十六個字我是店家名</h3>
                <p class="text-base text-center mb-4">店家地區 | 店家類型</p>
                <div class="restaurant-feature-wrapper d-flex justify-content-between">
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#" class="restaurants-card">
              <div class="restaurant-pic">
                <img src="/src/assets/images/restaurant-1.png" alt="" class="">
              </div>
              <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                <h3 class="text-16 mb-1">我是店家名稱最多十六個字我是店家名</h3>
                <p class="text-base text-center mb-4">店家地區 | 店家類型</p>
                <div class="restaurant-feature-wrapper d-flex justify-content-between">
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="#" class="restaurants-card">
              <div class="restaurant-pic">
                <img src="/src/assets/images/restaurant-1.png" alt="" class="">
              </div>
              <div class="restaurant-info bg-primary pt-4 pb-5 px-4">
                <h3 class="text-16 mb-1">我是店家名稱最多十六個字我是店家名</h3>
                <p class="text-base text-center mb-4">店家地區 | 店家類型</p>
                <div class="restaurant-feature-wrapper d-flex justify-content-between">
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                  <a href="#" class="restaurant-feature text-12 text-base border border-base py-1 px-4">特點一</a>
                </div>
              </div>
            </a>
          </swiper-slide>
          <span class="mdi mdi-chevron-left text-base"></span>
          <span class="mdi mdi-chevron-right text-base"></span>
        </swiper>
      </div>
    </div>
    <div class="feature pb-5 mb-10">
      <div class="container">
        <h2 class="text-base text-28 text-center fw-bold mb-2">享受美好的一餐</h2>
        <p class="text-base text-20 text-center fw-bold mb-5">收藏、評論、分享，或者來點驚喜？</p>
        <div class="feature-wrapper d-flex flex-wrap justify-content-evenly justify-content-lg-center mb-7">
          <a href="" class="feature-btn text-16 border border-base px-6 py-4 mb-4 mb-lg-0 me-lg-6">活動新知</a>
          <a href="" class="feature-btn text-16 border border-base px-6 py-4 mb-4 mb-lg-0 me-lg-6">店家收藏</a>
          <a href="" class="feature-btn text-16 border border-base px-6 py-4 me-lg-6">心得評論</a>
          <a href="" class="feature-btn text-16 border border-base px-6 py-4">來點驚喜</a>
        </div>
        <div class="row align-items-lg-center justify-content-lg-between">
          <div class="col-lg-6">
            <div class="feature-image mb-5 mb-lg-10 mx-auto mx-lg-0">
              <img src="/src/assets/images/selfie-sm.png" alt="" class="w-100 d-lg-none">
              <img src="/src/assets/images/selfie.png" alt="" class="w-100 d-none d-lg-block">
            </div>
          </div>
          <div class="feature-text mb-5 col-lg-6">
            <h3 class="text-20 text-lg-24 text-base fw-bold mb-2">心得評論</h3>
            <p class="text-12 text-lg-16 text-base">五星好評，蛤棒在哪什麽的不重要啦（笑）<br>爲了讓評分更爲直觀，我們只區分出五個簡單項目：味道好、賣相好、服務好、環境好以及CP好，選完之後打上心得，簡單選擇、輕鬆分享！</p>
          </div>
          <div class="feature-text mb-5 mb-lg-10 col-lg-6">
            <h3 class="text-20 text-lg-24 text-base fw-bold mb-2">來點驚喜</h3>
            <p class="text-12 text-lg-16 text-base">選擇障礙困擾你很久了嗎？我們也是！<br>我們提供了隨機選擇器，可以讓您有條件或無條件的，讓您可以從我們的資料庫中，隨機挑選您的任一餐，再也不煩惱要吃什麼啦！</p>
          </div>
        </div>
        <div class="row flex-lg-row-reverse align-items-lg-end justify-content-lg-between">
          <div class="d-flex flex-column flex-lg-column-reverse align-items-lg-end col-lg-6">
            <div class="feature-image mb-5 mx-auto mx-lg-0">
              <img src="/src/assets/images/chief-sm.png" alt="" class="w-100 d-lg-none">
              <img src="/src/assets/images/chief.png" alt="" class="w-100 d-none d-lg-block">
            </div>
            <div class="feature-text mb-5 mb-lg-10">
              <h3 class="text-20 text-lg-24 text-base fw-bold mb-2">店家收藏</h3>
              <p class="text-12 text-lg-16 text-base">可是瑞凡，我回不去了（上次那間店）<br>還記得你前七千三百六十八又五分之四天去的那間店嗎，從今以後我們幫你記！只要簡單一按就可以收藏店家，美食在哪裏，絕對難不倒你！</p>
            </div>
          </div>
          <div class="feature-text col-lg-6">
            <h3 class="text-20 text-lg-24 text-base fw-bold mb-2">活動新知</h3>
            <p class="text-12 text-lg-16 text-base">哭啊沒人跟我講我的愛店昨天特價啦！<br>我們協助會員店家發佈公告訊息，從生日壽星大優惠到來店即送薄荷糖，只要您説，我們就大聲放送！另外也會定期舉辦活動哦！</p>
          </div>
        </div>
      </div>
      <div class="feature-bg"></div>
    </div>
  </main>
</template>
