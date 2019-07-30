<template>
  <div class="container" @click="handleGallary">
    <div class="wrapper">
      <!-- 解决空数组造成的 刷新的首页图是最后一张图片 避免使用其他逻辑 不写list.length-->
      <swiper :options="swiperOptions" >
        <!-- slides 轮播图   其中:src代表绑定src不然页面报错-->
        <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
            <!-- 需要绑定 图片才会显示 :src -->
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
      //传值
      gallaryImgs:{
        type: Array,
        default () {
            return []
        }
      }  
  },
  methods : {
      handleGallary(){
        //   传点击事件出去
          this.$emit('close')
      }
  },
  data () {
      return{
          //这里使用轮播图的参数 
          swiperOptions: {
              pagination : '.swiper-pagination',
            //分页使用的参数
              paginationType : 'fraction',
              //自我刷新的效果 是页面图片轮播显示无问题
              observeParents : true,
              observer : true,
              loop: true
          }
          
      }
  }
};
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container 
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 99;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        .wrapper
            height : 0
            width : 100%
            padding-bottom : 100%
            .gallary-img
                // margin : 1.2rem 0 0 0
                width  : 100%
            .swiper-pagination
                color : #ffffff
                bottom : -1rem

</style>
