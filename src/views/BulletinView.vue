<script setup>

</script>

<template>
  <div class="py-2 border-bottom border-3 border-black">
    <div class="bulletin-banner"></div>
  </div>
  <div class="bg-white py-7">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-12 mb-5">
                <ul class="row justify-content-center">
                    <li class="col-lg-2">
                        <a href="#" class="bulletin-type text-lg-20 font-bold text-center py-3 active">所有公告</a>
                    </li>
                    <li class="col-lg-2">
                        <a href="#" class="bulletin-type text-lg-20 font-bold text-center py-3">最新活動</a>
                    </li>
                    <li class="col-lg-2">
                        <a href="#" class="bulletin-type text-lg-20 font-bold text-center py-3">店家消息</a>
                    </li>
                    <li class="col-lg-2">
                        <a href="#" class="bulletin-type text-lg-20 font-bold text-center py-3">心得分享</a>
                    </li>
                    <li class="col-lg-2">
                        <a href="#" class="bulletin-type text-lg-20 font-bold text-center py-3">服務公告</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-10">
                <ul class="row gy-5">
                    <li class="col-lg-6">
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
                    <li class="col-lg-6">
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
                                        <p class="text-justify border-start border-secondary border-4 ps-4 mb-2">即日起到8月底前，只要前往紛饗指定之合作夥伴店家，即可享有大大大優惠，並且留下評論還可以再獲得抽獎機會唷，趕快來參加！</p>
                                        <p class="text-danger text-lg-20 fw-bold text-end">MORE</p>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li class="col-lg-6">
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
                    <li class="col-lg-6">
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
                <div class="py-5">
                    <div class="d-flex justify-content-end">
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
