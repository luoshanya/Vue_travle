<template>
  <div>
    <!--引用使header.vue能够使用-->
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-lcons :lconsList="lconsListurl"></home-lcons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
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
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeLcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      city: "",
      //传列表使用[]
      swiperList: [],
      lconsListurl: [],
      recommendList: [],
      weekendList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.gteHomeInfoSucc);
    },
    gteHomeInfoSucc(res) {
      // 父传值 创建一个对象
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.lconsListurl = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>

<style>
</style>