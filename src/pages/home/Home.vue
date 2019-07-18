<template>
  <div>
    <!--引用使header.vue能够使用-->
    <home-header></home-header>
    <home-swiper></home-swiper>
    <!-- 这里使用标签，会在前端显示 而且类似于塞进去 -->
  </div>
</template>

<script>
// Swiper.vue创建好之后要在Home.vue中import
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style>
</style>