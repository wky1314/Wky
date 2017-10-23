import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import EmployeeFile from './modules/EmployeeFile'
Vue.use( Vuex )

const store = new Vuex.Store({
  state: {
    count: 1,
    num: 10
  },
  modules: {
    user,
    EmployeeFile
  }
})

export default store