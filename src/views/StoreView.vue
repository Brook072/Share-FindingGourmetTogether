<script setup>
    import { RouterLink } from 'vue-router'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from "swiper";
    import 'swiper/css';
    import 'swiper/css/pagination';
</script>

<template>
  <div class="bg-white">
    <div class="container">
        <div class="p-5">
            <div class="row justify-content-center mb-5">
                <h1 class="text-base text-lg-40 mb-4 text-center">超絕無敵炫砲你家巷口的私房餐廳</h1>
                <p class="text-base text-lg-28 text-center mb-4">西式美食 | 台中市-西區</p>
                <div class="col-lg-6 me-5">
                    <img src="../assets/images/restaurant-1.png" alt="" class="rounded-3 w-100">
                </div>
                <div class="col-lg-4">
                    <div class="mb-5">
                        <div class="d-flex">
                            <span class="mdi mdi-text text-base text-lg-20 fw-bold me-2"></span>
                            <h3 class="text-lg-20 text-base fw-bold mb-2">店家簡介:</h3>
                        </div>
                        <p class="text-justify">位於城市當中，一個可以讓您享受優雅氣氛的好地方，品味獨到且餐點各具風味，直得您特地找個時間來細細品嚐，享受於城市當中難得的好時光</p>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-between mb-4">
                            <a href="#" class="feature-tag d-flex align-items-center text-12 text-lg-16 lh-1 text-black border border-base py-2 px-4">
                                    <span class="d-block mdi mdi-camera me-1"></span>
                                    <p class="fw-bold">賣相佳</p>
                                </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 text-lg-16 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-room-service me-1"></span>
                                <p class="fw-bold">服務棒</p>
                            </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 text-lg-16 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-food text-center me-1"></span>
                                <p class="fw-bold text-center">味道好</p>
                            </a>
                        </div>
                        <hr class="my-4">
                        <div class="row">
                            <div class="col-lg-8">
                                <button class="btn btn-primary w-100 h-100">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <span class="mdi mdi-pencil me-3 text-lg-32"></span>
                                        <p class="text-lg-32">評價</p>
                                    </div>
                                </button>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <a href="#" class="d-flex btn btn-secondary w-100 py-1 mb-2">
                                        <div class="d-flex align-items-center">
                                            <span class="mdi mdi-heart me-3"></span>
                                            <p class="">收藏</p>
                                        </div>
                                    </a>
                                    <a href="#" class="d-flex btn btn-secondary py-1 w-100">
                                        <div class="d-flex align-items-center">
                                            <span class="mdi mdi-export-variant me-3"></span>
                                            <p class="">分享</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="bg-base py-7">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="mb-6">
                    <div class="d-flex mb-2">
                        <span class="mdi mdi-map-marker-outline text-white text-20 fw-bold me-2"></span>
                        <p class="text-white text-20 fw-bold">店家地址:</p>
                    </div>
                    <p class="text-white text-justify">我是地址不知道會有幾個字但我覺得最長差不多是四行在我打完這行字之後拉了一下長度計算了一下總字數最多應該是七十六個字應該是差不多這樣子補字補字補字補字補字</p>
                </div>
                <div class="mb-6">
                    <div class="d-flex">
                        <span class="mdi mdi-phone-outline text-white text-20 fw-bold me-2"></span>
                        <p class="text-white text-20 fw-bold">聯絡電話：</p>
                        <a href="tel:+1232-5678">(04)1234-5678</a>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <div class="d-flex">
                        <span class="mdi mdi-clock-outline text-white text-20 fw-bold me-2"></span>
                        <p class="text-white text-20 fw-bold">營業時間：</p>
                    </div>
                    <button class="btn btn-primary">點我看營業時間</button>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="store-map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.408344058457!2d120.65143831467269!3d24.157407879023392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42fa9be06dcd4639!2zMjTCsDA5JzI2LjciTiAxMjDCsDM5JzEzLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1662870287027!5m2!1szh-TW!2stw" width="100%" height="280" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="bg-light py-7">
    <div class="container">
        <h3 class="text-base text-lg-28 fw-bold text-center mb-4">近期評價</h3>
        <swiper 
          class="pb-8"
          :slidesPerView=1
          :spaceBetween="16"
          :pagination="{
            clickable: true,
          }"  
          :breakpoints="{
            '1400':{
              slidesPerView: 3,
              slidesPerGroup: 3,
            }
          }"
          :modules=[Pagination]
          >
          <swiper-slide>
            <div class="card">
                <div class="card-body">
                    <div class="mb-3 py-2">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src="/src/assets/images/user-1.jpg" alt="" class="user-pic mx-auto mb-2">
                                <p class="text-center">Andy</p>
                                <p class="text-center">2022-08-10</p>
                            </div>
                            <div class="comment-pic col-lg-6">
                                <img src="/src/assets/images/comment-pic-1.jpg" alt="" class="w-100 h-100">
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-between px-1">
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                    <span class="d-block mdi mdi-camera me-1"></span>
                                    <p class="fw-bold">賣相佳</p>
                                </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-room-service me-1"></span>
                                <p class="fw-bold">服務棒</p>
                            </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-food text-center me-1"></span>
                                <p class="fw-bold text-center">味道好</p>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p class="text-justify">這邊的義大利麵是我吃過最好吃的了！而且餐廳氛圍非常獨樹一格，光是食物就可以讓我用手機吃個好幾次，服務人員也是一等一的棒，下次會再訪享受美食。</p>
                    </div>
                </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
                <div class="card-body">
                    <div class="mb-3 py-2">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src="/src/assets/images/user-2.jpg" alt="" class="user-pic mx-auto mb-2">
                                <p class="text-center">Benson</p>
                                <p class="text-center">2022-06-15</p>
                            </div>
                            <div class="comment-pic col-lg-6">
                                <img src="/src/assets/images/comment-pic-2.jpg" alt="" class="w-100 h-100">
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-between px-1">
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                    <span class="d-block mdi mdi-camera me-1"></span>
                                    <p class="fw-bold">賣相佳</p>
                                </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-room-service me-1"></span>
                                <p class="fw-bold">服務棒</p>
                            </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-food text-center me-1"></span>
                                <p class="fw-bold text-center">味道好</p>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p class="text-justify">歐買尬！這裡的甜品實在是太讚人，做為一個超級螞蟻人，看到滿漢全席可以忍，但看到甜食就不行，這樣的蛋糕色香味俱全，這麼棒的甜點沒辦法每天吃到我該怎麼辦！</p>
                    </div>
                </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
                <div class="card-body">
                    <div class="mb-3 py-2">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src="/src/assets/images/user-3.jpg" alt="" class="user-pic mx-auto mb-2">
                                <p class="text-center">Christina</p>
                                <p class="text-center">2021-09-10</p>
                            </div>
                            <div class="comment-pic col-lg-6">
                                <img src="/src/assets/images/comment-pic-3.jpg" alt="" class="w-100 h-100">
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-between px-1">
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                    <span class="d-block mdi mdi-camera me-1"></span>
                                    <p class="fw-bold">賣相佳</p>
                                </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-room-service me-1"></span>
                                <p class="fw-bold">服務棒</p>
                            </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-food text-center me-1"></span>
                                <p class="fw-bold text-center">味道好</p>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p class="text-justify">做為一個原則性手機先吃的網美，在看到這裡的食物端上桌時，我竟深深無法自拔，默默的拿起餐具吃了一口，這就是中華一番等級的下藥菜色嗎。</p>
                    </div>
                </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
                <div class="card-body">
                    <div class="mb-3 py-2">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src="/src/assets/images/user-4.jpg" alt="" class="user-pic mx-auto mb-2">
                                <p class="text-center">Dorothy</p>
                                <p class="text-center">2020-02-14</p>
                            </div>
                            <div class="comment-pic col-lg-6">
                                <img src="/src/assets/images/comment-pic-4.jpg" alt="" class="w-100 h-100">
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-between px-1">
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                    <span class="d-block mdi mdi-camera me-1"></span>
                                    <p class="fw-bold">賣相佳</p>
                                </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-room-service me-1"></span>
                                <p class="fw-bold">服務棒</p>
                            </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-food text-center me-1"></span>
                                <p class="fw-bold text-center">味道好</p>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p class="text-justify">我來這裡只是想要過個情人節，結果他今天居然跟我提分手，原本以為我要孤老一輩子了，可是他突然默默的拿出戒指跟我求婚，沒錯我只是想再評價這裡閃爆你各位。</p>
                    </div>
                </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
                <div class="card-body">
                    <div class="mb-3 py-2">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src="/src/assets/images/user-5.jpg" alt="" class="user-pic mx-auto mb-2">
                                <p class="text-center">Evelyn</p>
                                <p class="text-center">2020-05-13</p>
                            </div>
                            <div class="comment-pic col-lg-6">
                                <img src="/src/assets/images/comment-pic-5.jpg" alt="" class="w-100 h-100">
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-between px-1">
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                    <span class="d-block mdi mdi-camera me-1"></span>
                                    <p class="fw-bold">賣相佳</p>
                                </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-room-service me-1"></span>
                                <p class="fw-bold">服務棒</p>
                            </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-food text-center me-1"></span>
                                <p class="fw-bold text-center">味道好</p>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p class="text-justify">之前聽說這裡有批好便宜的牛肉，我就想說來嚐鮮就打了個電話訂位，沒想到除了便宜以外還真的是非常好吃，物美價廉，非常推薦大家都該嚐嚐</p>
                    </div>
                </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
                <div class="card-body">
                    <div class="mb-3 py-2">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src="/src/assets/images/user-6.jpg" alt="" class="user-pic mx-auto mb-2">
                                <p class="text-center">Frank</p>
                                <p class="text-center">2020-08-04</p>
                            </div>
                            <div class="comment-pic col-lg-6">
                                <img src="/src/assets/images/comment-pic-6.jpg" alt="" class="w-100 h-100">
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-between px-1">
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                    <span class="d-block mdi mdi-camera me-1"></span>
                                    <p class="fw-bold">賣相佳</p>
                                </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-room-service me-1"></span>
                                <p class="fw-bold">服務棒</p>
                            </a>
                            <a href="#" class="feature-tag d-flex align-items-center text-12 lh-1 text-black border border-base py-2 px-4">
                                <span class="d-block mdi mdi-food text-center me-1"></span>
                                <p class="fw-bold text-center">味道好</p>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p class="text-justify">走進餐廳的時候看著別人點的菜色，我實在是很想每個都來一盤，一不小心就點了一大堆，這裡的東西超讚又好吃，服務人員態度特好，讚到爆！</p>
                    </div>
                </div>
            </div>
          </swiper-slide>
        </swiper>
    </div>
  </div>
  <div class="bg-storeArticle py-7">
    <div class="container">
        <h3 class="text-base text-lg-28 fw-bold text-center mb-4">相關文章</h3>
        <div class="">
            <ul class="row">
                <li class="col-lg-3">
                    <router-link to="/article" class="text-black">
                        <div class="card bg-white border-base">
                            <div class="card-body p-0">
                                <div class="card-article-pic mb-4 p-4" id="article-1"></div>
                                <div class="card-article-type-wrapper">
                                    <p class="text-lg-28 text-white fw-bold">2022-06-20</p>
                                    <p class="text-secondary fw-bold text-lg-20">活動新知</p>
                                </div>
                                <div class="py-2 px-4">
                                    <h4 class="text-lg-24 fw-bold mb-5">紛饗好食光！共享歡樂共享飯！</h4>
                                    <p class="text-justify border-start border-secondary border-4 ps-4">分享你在各個店家的用餐好時光，將可以獲得抽獎的機會，並為了你喜歡的巷口轉角那間私房餐廳，博得人氣獎跟曝光量唷！</p>
                                    <p class="text-danger text-lg-20 fw-bold text-end">MORE</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="col-lg-3">
                    <router-link to="/article" class="text-black">
                        <div class="card bg-white border-base">
                            <div class="card-body p-0">
                                <div class="card-article-pic mb-4 p-4" id="article-2"></div>
                                <div class="card-article-type-wrapper">
                                    <p class="text-lg-28 text-white fw-bold">2022-07-08</p>
                                    <p class="text-secondary fw-bold text-lg-20">促銷活動</p>
                                </div>
                                <div class="py-2 px-4">
                                    <h4 class="text-lg-24 fw-bold mb-5">食慾之夏，餐廳促銷報你知！</h4>
                                    <p class="text-justify border-start border-secondary border-4 ps-4">即日起到8月底前，只要前往紛饗指定之合作夥伴店家，即可享有大大大優惠，並且留下評論還可以再獲得抽獎機會唷，趕快來參加！</p>
                                    <p class="text-danger text-lg-20 fw-bold text-end">MORE</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="col-lg-3">
                    <router-link to="/article" class="text-black">
                        <div class="card bg-white border-base">
                            <div class="card-body p-0">
                                <div class="card-article-pic mb-4 p-4" id="article-3"></div>
                                <div class="card-article-type-wrapper">
                                    <p class="text-lg-28 text-white fw-bold">2020-02-14</p>
                                    <p class="text-secondary fw-bold text-lg-20">個人食記</p>
                                </div>
                                <div class="py-2 px-4">
                                    <h4 class="text-lg-24 fw-bold mb-5">單身狗餐廳遊記-情人節一個人吃飯傳</h4>
                                    <p class="text-justify border-start border-secondary border-4 ps-4">今天單身狗餐廳遊記來到了傳說中的這間餐廳，先不說別的，為什麼這麼剛好就有一對情侶在旁邊搞假分手真求婚，還讓不讓人吃飯啊</p>
                                    <p class="text-danger text-lg-20 fw-bold text-end">MORE</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="col-lg-3">
                    <router-link to="/article" class="text-black">
                        <div class="card bg-white border-base">
                            <div class="card-body p-0">
                                <div class="card-article-pic mb-4 p-4" id="article-4"></div>
                                <div class="card-article-type-wrapper">
                                    <p class="text-lg-28 text-white fw-bold">2022-10-15</p>
                                    <p class="text-secondary fw-bold text-lg-20">服務公告</p>
                                </div>
                                <div class="py-2 px-4">
                                    <h4 class="text-lg-24 fw-bold mb-5">伺服器維修時間公告：10月16日</h4>
                                    <p class="text-justify border-start border-secondary border-4 ps-4">伺服器將於10月16日之凌晨1點至3點進行維修，屆時相關服務將無法進行使用，麻煩各位會員於維修前進行存檔，造成不便敬請見諒。</p>
                                    <p class="text-danger text-lg-20 fw-bold text-end">MORE</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style>

</style>
