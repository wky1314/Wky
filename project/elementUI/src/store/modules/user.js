import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios
//存放数据状态
const state = {
    userInfo: {}  //用户信息
}
// getters 计算属性 用于暴露userinfo
const getters = {
    getUserInfo: (state) => {
        if( window.location.href.indexOf('login') != -1 ) return false;
        if( JSON.stringify(state.userInfo) == '{}' ){
            let userInfo = JSON.parse( window.localStorage.getItem('userInfo') );
            if( !userInfo ){
                window.location.href="/login"
            }
            state.userInfo = userInfo
        }
        return state.userInfo
    }
}
// actions 用dispatch触发 actions用来提交mutations
const actions = {
    //登录
    loginDo ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.post('/api/login_do', params).then((response) => {
                commit(types.SET_USER_INFOR,response.data)  //commit是提交mutations的
                // console.log(params)
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        })
    },
    //退出
    loginOut ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            commit(types.SET_USER_INFOR,'')
            resolve({
              code: 200
            })
        } )
    },
    //获取规则
    getRoot ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.get('/api/getUserRoot', {params}).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //获取用户权限列表 做角色的渲染
     getRootList({ commit, state }) {
        return new Promise( (resolve, reject)=>{
            axios.get('/api/getRootList').then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //自动更新 通过你在列表中选择的权限 页面中相应显示
      getUserRoot({ commit, state },params) {
        return new Promise( (resolve, reject)=>{
            axios.get('/api/editRoot',{params}).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //修改登陆信息 不需要后台接口 直接返回  因为之前动态渲染路由是在localstorage里面取得。所以把读取出来的权限放入localstoreage里面 以一个对象的方式"root":res权限

     setUserInfo ({ commit, state },params ) {
        return new Promise( (resolve, reject)=>{
            let  userInfo = state.userInfo;//先值读取
            userInfo[params.key]=params.value;
            // console.log(userInfo[params.key])//root
            // console.log(params.value)//res 权限
            commit(types.SET_USER_INFOR,userInfo)  //commit是提交mutations的
            // console.log(params) 然后提交把修改后的值赋给原来的值 
            resolve(userInfo)
        })
    },

      addRole({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.post('/api/addRole', params).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },

}

// mutations 改变state里面的数据状态
const mutations = {
    [types.SET_USER_INFOR](state, userInfo) {
        state.userInfo = userInfo
        if( userInfo == '' ){
            window.localStorage.removeItem('userInfo')
        }else{
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo) )
        }
    }
}
//mutations的函数用commit触发

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
