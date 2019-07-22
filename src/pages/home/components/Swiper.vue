<template>
  <div class="wrapper">
    <!-- 解决空数组造成的 刷新的首页图是最后一张图片 避免使用其他逻辑 不写list.length-->
    <swiper :options="swiperOption" v-if='showSwiper'>
      <!-- slides 轮播图   其中:src代表绑定src不然页面报错-->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    // 接收数组使用类型array
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        // 然轮播图进行循环轮播
        loop: true
      },
      //   使用vue方法进行list循环放出样式
    //   pagination_list: [
    //     {
    //       id: "0001",
    //       imgUrl:
    //         "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/bc62e131afb380e98e4beac33e751c6c.jpg_750x200_2e248116.jpg"
    //     },
    //     {
    //       id: "0002",
    //       imgUrl:
    //         "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/a5d26ebec399b3aef013f45771ae96f0.jpg_750x200_de947eef.jpg"
    //     },
    //     {
    //       id: "0003",
    //       imgUrl:
    //         "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/ae8987bff39ff10e82675a3643154e66.jpg_750x200_0f187b2e.jpg"
    //     }
    //   ]
    };
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
};
</script>

<style lang="stylus" scoped>
// 修改轮播图点颜色方法
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
}

.swiper-img {
  width: 100%;
  height: 2.33rem;
}
</style>