<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  color: #ffffff;
  background: $bgColor;
  font-size: 0.32rem;
  text-align: center;

  .back-icon {
    position: absolute;
    left: 0;
    font-size: 0.4rem;
    width: 0.64rem;
    text-align: center;
    top: 0;
    color: #fff;
  }
}
</style>