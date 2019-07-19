<template>
  <div>
    <!--引用使header.vue能够使用-->
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-lcons></home-lcons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
    <!-- 这里使用标签，会在前端显示 而且类似于塞进去 -->
  </div>
</template>

<script>
// Swiper.vue创建好之后要在Home.vue中import
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeLcons from "./components/lcons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeLcons,
    HomeRecommend,
    HomeWeekend,
  }
};
</script>

<style>
</style>