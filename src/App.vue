<template>
  <div id="app">
    <!-- 防止ajax 控制台多次请求 <keep-alive> 设置之后自动选择网页内存渲染-->
      <!-- 要mounted不断的请求，使用exclude=组件名 这样每次请求页面都发送一次请求-->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
