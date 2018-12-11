// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 页面初始化
import 'styles/reset.css'
// 移动端1像素边框解决方案
import 'styles/border.css'
// 移动端click事件300毫秒延迟问题
import fastClick from 'fastclick'
// iconfont图标引入
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  /* 在es6中键和值相同可以省略值 */
  router,
  components: { App },
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容给用户
