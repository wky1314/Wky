import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios

const state = {
    userInfo: {}  //用户信息
}
// getters
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

// actions
const actions = {
    
    loginDo ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.post('/api/userLogin', params).then((response) => {
                commit(types.GET_USER_INFOR,response.data)
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    }
}

// mutations
const mutations = {
    [types.GET_USER_INFOR](state, userInfo) {
        state.userInfo = userInfo
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo) )
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
