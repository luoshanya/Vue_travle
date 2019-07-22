<template>
  <div class="icons">
    <!-- 解决轮播图自动更换下一页的方法 :options="swiperOption" -->
    <swiper :options="swiperOption">
      <!-- slides 轮播图   其中:src代表绑定src不然页面报错-->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="text-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeLcons",
  props: {
    lconsList: Array
  },
  // 解决轮播图自动更换下一页的方法
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  // data() {
  //   return {
  //     incon_list: [
  //       {
  //         id: "0001",
  //         iconUrl:
  //           "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
  //         desc: "景点门票"
  //       },
  //       {
  //         id: "0002",
  //         iconUrl:
  //           "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
  //         desc: "广州必游"
  //       },
  //       {
  //         id: "0003",
  //         iconUrl:
  //           "https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
  //         desc: "动植物园"
  //       },
  //       {
  //         id: "0004",
  //         iconUrl:
  //           "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
  //         desc: "自然风光"
  //       },
  //       {
  //         id: "0005",
  //         iconUrl:
  //           "https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
  //         desc: "珠江夜游"
  //       },
  //       {
  //         id: "0006",
  //         iconUrl:
  //           "https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
  //         desc: "水上乐园"
  //       },
  //       {
  //         id: "0007",
  //         iconUrl:
  //           "https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
  //         desc: "亲子游"
  //       },
  //       {
  //         id: "0008",
  //         iconUrl:
  //           "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png",
  //         desc: "长隆度假区"
  //       },
  //       {
  //         id: "0009",
  //         iconUrl:
  //           "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png",
  //         desc: "还想去哪？"
  //       },
  //       {
  //         id: "0010",
  //         iconUrl:
  //           "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png",
  //         desc: "还想去哪？"
  //       }
  //     ]
  // };
  // },
  //   算法 轮播图显示下一页内容
  computed: {
    pages() {
      const pages = [];
      this.lconsList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .icon {
    position: relative;
    // 溢出隐藏
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      // 布局 这样颜色会占满空间 所以=需要在上面添加相对布局
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }

    .text-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $textColor;
      ellipsis();
    }
  }
}
</style>