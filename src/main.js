// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 像素边框问题使用border.css  手机适应的css文件reset.css
import './assets/styles/border.css'

Vue.config.productionTip = false

fastClick.attach(document.body)
/*手机点击事件延迟300ms的问题解决*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
