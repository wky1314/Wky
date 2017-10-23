<template>
  <div class="login-box">
    <el-input v-model="loginInfo.userName" placeholder="请输入邮箱"></el-input>
    <el-input v-model="loginInfo.userPwd" placeholder="请输入密码"></el-input>
    <el-button type="primary" @click="loginDo">登录</el-button>
  </div>
</template>

<script>
import {routerArr} from '../../router'


export default {
  name: 'hello',
  data () {
    return {
      loginInfo: {
          userName: '',
          userPwd: ''
      }
    }
  },
  methods: {
      loginDo () {
       this.$store.dispatch('user/loginDo',this.loginInfo).then(
          (data)=>{
            this.$store.dispatch('user/getRoot',{
              id: data.type
            }).then( 
              (res)=>{
                this.$store.dispatch('user/setUserInfo',{
                  key: 'root',
                  value: res
                }).then( () =>{
                    this.$router.push('/index')
                    console.log('修改成功')
                })
              } 
            )
          }
        )
          // window.localStorage.setItem('userInfo','sssss');
          // setTimeout( ()=>{
              
          //     this.$router.addRoutes( routerArr )
          //     let newRouter = this.$router.options.routes.concat( routerArr )
          //     this.$router.options.routes = newRouter;
          //     this.$router.replace('/index')
          // }, 1000)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
