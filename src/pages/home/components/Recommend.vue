<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- 使有一像素的边框 直接使用 border-bottom-->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  }
  // data() {
  //   return {
  //     recommendList: [
  //       {
  //         id: "0001",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
  //         title: "大连圣亚海洋世界",
  //         desc: "浪漫吗？小伙子"
  //       },
  //       {
  //         id: "0002",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
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
  //           "https://imgs.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
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
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

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

    .item-button {
      margin-top: 0.12rem;
      background: #ff9300;
      padding: 0.1rem;
      border-radius: 0.06rem;
      color: #ffffff;
    }
  }
}
</style>