import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios

const state = {
  
}
// getters
const getters = {
    
}

// actions 用dispatch提交
const actions = {
     //方法
     //渲染员工列表的数据
      getMemberList({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.get('/api/memberList', {//虚拟接口
                params
            }).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //点击添加员工 插入的数据
       addMember({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.post('/api/addMember', params).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
   //修改数据
    addFileEditList({ commit, state }, params ) { 
        return new Promise( (resolve, reject)=>{
            axios.post('/api/FileEditList', params).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },

    //删除数据
    deleteList({ commit, state }, params ) { 
        return new Promise( (resolve, reject)=>{
            axios.post('/api/getDeleteList', params).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },

    //模糊查询

     selectList({ commit, state }, params ) { 
        //  console.log(params)
        return new Promise( (resolve, reject)=>{
            axios.get('/api/getSelectList', {params}).then((response) => {
                resolve(response.data)
                console.log(response)
            }).catch((error) => {
                reject( error )
            })
        } )
    }
}
// mutations
const mutations = {
    
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
