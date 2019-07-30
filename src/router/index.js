import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // 这个就是上面的import
      component: Home
      // 异步组件加载
      // component : () => import('@/pages/home/Home')
    },
    // 新建一个路由
    {
      // 新建路由的路径
      path: '/city',
      name: 'City',
      // 这个就是上面的import
      component: City
    },
    // 新建一个路由
    {
      // 新建路由的路径
      path: '/detail/:id',
      name: 'Detail',
      // 这个就是上面的import
      component: Detail
    }],
  // 防止滚动条影响全局事件
  // eslint-disable-next-line space-before-function-paren
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
