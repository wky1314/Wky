import Vue from 'vue'
import Vuex from 'vuex'
import movie from './modules/movie'
import cinema from './modules/cinema'
import zoom from './modules/zoom'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 1,
    num: 10
  },
  modules: {
    movie,
    cinema,
    zoom
  },
  getters: {
    // getters接受state为第一参数 第二个参数可接受getters
   
  },
  mutations: {
   
  },
  actions: {
    // increment (context) {
    //   context.commit('increment')
    // }
    //结构赋值的写法
    // increment ({commit}) {
    //    commit('increment')
    // }
    
  }
})
export default store