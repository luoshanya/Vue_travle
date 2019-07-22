<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- 使有一像素的边框 直接使用 border-bottom-->
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList : Array
  },
  // data() {
  //   return {
  //     recommendList: [
  //       {
  //         id: "0001",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
  //         title: "大连圣亚海洋世界",
  //         desc: "浪漫吗？小伙子"
  //       },
  //       {
  //         id: "0002",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
  //         title: "大连圣亚海洋世界",
  //         desc: "浪漫吗？小伙子"
  //       },
  //       {
  //         id: "0003",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
  //         title: "大连圣亚海洋世界",
  //         desc: "浪漫吗？小伙子"
  //       },
  //       {
  //         id: "0004",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
  //         title: "大连圣亚海洋世界",
  //         desc: "浪漫吗？小伙子"
  //       },
  //       {
  //         id: "0005",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
  //         title: "大连圣亚海洋世界",
  //         desc: "浪漫吗？小伙子"
  //       }
  //     ]
  //   };
  // }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;

  .item-title {
    overflow: hidden;
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #cccccc;
    ellipsis();
  }
}
</style>