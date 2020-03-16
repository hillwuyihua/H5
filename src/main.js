// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'//ajax
Vue.prototype.$axios=axios

import https from './utils/https.js' //axios拦截器
import './router/handle' //路由拦截、设置title及强制跳转。
import './utils/rem.js' 
/* import("./assets/css/common.css"); */
import '../static/css/common.css' /*引入公共样式*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.prototype.Baseurl="https://www.gcy168.com"
Vue.config.productionTip = false

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


