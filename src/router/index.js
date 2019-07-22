import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // 这个就是上面的import
      component: Home
    },
    // 新建一个路由
    {
      // 新建路由的路径
      path: '/city',
      name: 'City',
      // 这个就是上面的import
      component: City
    }
  ]
})
