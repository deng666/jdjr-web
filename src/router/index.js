import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/', // 这个表示的是根目录，即一进入的页面
    redirect: '/index' // 设置页面一进来就显示的页面，即重定向到goods组件，这里写的内容是对应组将的component的值
  }, {
    path: '/index',
    name: 'index',
    component: resolve => require(['@/pages/home'], resolve)
  }, {
    path: '/order',
    name: 'order',
    component: resolve => require(['@/pages/order'], resolve)
  }, {
    path: '/ious',
    name: 'ious',
    component: resolve => require(['@/pages/ious'], resolve)
  }, {
    path: '/download',
    name: 'download',
    component: resolve => require(['@/pages/special/download'], resolve)
  }]
})
