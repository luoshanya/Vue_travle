<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <!-- 可以进行页面跳转的标签 router-link -->
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  // 子组件接收父组件传来的信息
  props: {
    city: String
  }
  //   components: {
  //       HomeHeader
  //   }
};
</script>

<!--设置这个组件只对这里.header有效-->
<style scoped lang='stylus'>
// @import '../../../assets/styles/varibles.styl'
// @import '~@/assets/styles/varibles.styl'
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: 0.9rem;
  background: $bgColor;
  color: #fff;
  overflow: hidden;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
      margin-left: 0.2rem;
    }
  }

  .header-input {
    color: #cacaca;
    flex: 1;
    height: 0.55rem;
    margin-top: 0.05rem;
    margin-left: 0.2rem;
    padding-left: 0.1rem;
    background: #fff;
    border-radius: 0.1rem;
    padding-bottom: 0.3rem;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color : #ffffff
  }
}
</style>