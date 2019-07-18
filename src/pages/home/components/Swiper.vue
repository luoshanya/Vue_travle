<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides 轮播图   其中:src代表绑定src不然页面报错-->
      <swiper-slide v-for="item of pagination_list" :key="item.id">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        // 然轮播图进行循环轮播
        loop: true
      },
      //   使用vue方法进行list循环放出样式
      pagination_list: [
        {
          id: "0001",
          imgUrl:
            "http://img2.imgtn.bdimg.com/it/u=1117035161,2826823365&fm=26&gp=0.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://img4.imgtn.bdimg.com/it/u=1011025542,1440730234&fm=26&gp=0.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg"
        }
      ]
    };
  }
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