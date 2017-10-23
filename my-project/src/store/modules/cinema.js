import * as types from '../mutation-type'
import Vue from 'vue'
let axios = Vue.prototype.$axios
const state = {
    cinemaList: [] //state 存放数据
}
//getters 计算属性 获取state的状态 并以state为第一个参数
const getters = {
    cinemaList: (state) => {
        return state.cinemaList
    }
}
//mutations 改变state里面的数据状态的
const mutations = {
    [types.GET_CINEMA_LIST](state,cinemaList){
      state.cinemaList = state.cinemaList.concat(cinemaList)
    }
}
//actions 放一些逻辑操作 如判断循环 是用来提交mutations的 提交actions用$store.dispatch
const actions = {    
    getCinemaList({ commit, state }, params ) {
            return new Promise( (resolve, reject)=>{
                axios.get('/api/cinemaAdvertise', {
                    params
                }).then((response) => {
                    commit(types.GET_CINEMA_LIST,response.data.data)
                    resolve(state.cinemaList)
                  console.log(response)
                }).catch((error) => {
                    reject( error )
                })
            } )
    }
}
// 如果希望你的模块更加自包含或提高可重用性，你可以通过添加 namespaced: true 的方式使其成为命名空间模块。
// 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}