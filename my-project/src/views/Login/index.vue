<template>
   <div class="box">
        <div class="logo"></div>
        <div class="main" v-if="type=='user'">
            <input type="text" key="username-input" v-model="userName" placeholder="手机号/邮箱/会员名">
            <input type="password" v-model="passWord" placeholder="请输入密码">
            <div class="btn-group">
                <button class="btn" @click="loginType('user')">登录</button>
                <button class="btn active" @click="type='phone'">短信验证码登录</button>
            </div>
            <div class="title">
                <span>免费注册</span>
                <span>忘记密码</span>
            </div>
        </div>
        <div class="main" v-if="type=='phone'">
            <input type="number" key="phonename-input" v-model="phoneName" placeholder="请输入手机号码">
            <div class="info">
                <input type="number" v-model.number="code" placeholder="校验码">
                <p>获取短信验证码</p>
            </div>
            
            <div class="btn-group">
                <button class="btn" @click="loginType('phone')">登录</button>
                <button class="btn active" @click="type='user'">账户密码登录</button>
            </div>
        </div>
   </div>
</template>
<script>
export default {
  name: 'zoom',
  data () {
    return {
      type: 'user',
      userName: '',
      passWord: '',
      phoneName: '',
      code: ''
    }
  },
  methods: {
    loginType (type) {
      let loginData = {}
      if (type === 'user') {
        loginData['userName'] = this.userName
        loginData['passWord'] = this.passWord
      } else {
        loginData['phoneName'] = this.phoneName
        loginData['code'] = this.code
      }
      window.localStorage.setItem('userInfo', JSON.stringify(loginData))
      let path = window.localStorage.getItem('toPath')
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
    .logo{
        width: .8rem;
        height: .8rem;
        background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat;
        background-size: contain;
        margin: .5rem auto .4rem auto;
    }
    .main{
        width: 90%;
        margin: 0 auto;
        position: relative;
        .title{
            width: 90%;
            position: absolute;
            top: 1.25rem;
            left: .2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #555;
            font-size: .14rem;
        }
        input{
            width: 100%;
            height: .48rem;
            outline: none;
            border: none;
            border-bottom: 1px solid #ff5000;
        }
        input::-webkit-input-placeholder{
            color: #ccc;
            font-size: .14rem;
        }
        .btn-group{
            margin-top: .9rem;
            .btn{
                margin-bottom: .3rem;
                color: #fff;
                font-size: .14rem;
                width: 100%;
                height: .4rem;
                border-radius: .2rem;
                border: none;
                box-shadow: 0 0.08rem 0.16rem #f7c7b1;
                background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
                &.active{
                  background: transparent;
                  border: 1px solid #ff5000;
                  color: #ff5000;
                }
            }
        }
        .info{
            position: relative;
            p{
                position: absolute;
                right: .02rem;
                top: .17rem;
                font-size: .14rem;
                color: #ff5000;
                border-left: 1px solid #b5b5b5;
                padding-left: .05rem;
            }

        }
    }
}
</style>
