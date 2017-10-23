// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import mock from './mock'
import http from './http'
import directives from './directive'
import './static/lib/zepto.min'
import store from './store'

for (let key in directives) {
  Vue.directive(key, directives[key])
}

Vue.filter('my', function (value) {
  return value + 'web前端工程师'
})
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
