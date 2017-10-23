// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUi from 'element-ui'
import iview from 'iview'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import '../theme/index.css'
import {router} from './router'
// import './mock'
import './http'
import store from './store'
import Echarts from 'echarts'
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(iview)
Vue.prototype.$Echarts = Echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
