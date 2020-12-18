import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

// 解决移动端300毫秒的延迟
FastClick.attach(document.body)

Vue.use(toast)

// 使用懒加载插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/image.png')
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

const vue = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')