<template>
    <header class="header" v-if="getUserInfo!=''">
        <div class="left">
            <img src="../static/images/logo.png" alt="">
        </div>
        <div class="right">
            <h3>BOBO团队</h3>
        </div>
				<div class="group">
                <i class="iconfont icon-62"></i>
                <div class="info">
                    <!-- <img :src="getUserInfo.photo" alt="">-->
                    <span>{{getUserInfo.userName}}</span>
                </div>
                <i class="iconfont icon-tuichu" @click="login_out"></i>
            </div>
    </header>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'HeaderBar',
  computed: {
    ...mapGetters('user',[
      'getUserInfo' 
    ])
  },
  methods: {
      login_out () {
          this.$store.dispatch('user/loginOut').then( (data)=>{
              this.$router.replace( '/login' )
          } )
      }
  }
}
</script>
<style lang="less">
    .header{
      position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			background: #fff;
			height: .55rem;
			border-bottom: 1px solid #eee;
			z-index: 999;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 .2rem;
			box-sizing: border-box;
			.left{
				width: 1.2rem;
				height: .9rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.right{
				position: absolute;
				left: 160px;
				h3{
					font-weight: 400;
					font-size: .14rem;
					line-height: .55rem;
				}
			}
			.group{
					display: flex;
					align-items: center;
					i{
						padding: 0 .25rem;
						color: orange;
						font-size: .2rem;
					}
					img{
						width: .32rem;
						height: .32rem;
						display: inline-block;
						border-radius: 50%;
					}
				}
    }
</style>
