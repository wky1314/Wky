<template>
  <div id="app" v-if="$route.path!='/login'"><!--如果跳转的路由不是登录页 就进入刚开始的页面进行渲染-->
<!--{{$router.options.routes}} 获取所有嵌套路由信息-->  
 <HeaderBar></HeaderBar>
    <div class="left-menu">
       <el-menu default-active="2"  :router="true" @open="handleOpen" @close="handleClose">
         <template  v-for="(item,index) in $router.options.routes">
         <!--渲染导航-->
           <el-submenu :key="index" :index="index+''" v-if="item.meta && item.children">
               <template slot="title"> <i class="el-icon-message"></i>{{item.meta.title}}</template>
               <!--index唯一标志 必须是字符串 渲染导航上的标题 如果有meta和子路由-->
               <el-menu-item  v-for="(items,i) in item.children" :index="index+'-'+i" :route="{name: items.name}">
                    <template slot="title">{{items.meta.title}}</template>
                   <!-- 遍历子路由 渲染子路由上的文字-->
               </el-menu-item>
          </el-submenu>
          <!--如果只有item.meta 就是单个的 直接渲染标题-->
              <el-menu-item v-else-if="item.meta && item.name != 'Login'" :index='index+""' :route="{name: item.name}">
                <i class="el-icon-setting"></i>{{item.meta.title}}
              </el-menu-item>
        </template>
       </el-menu>
     </div>
      <div class="content"><!--hellon那一页-->
         <router-view></router-view>
      </div>
  </div>
  <div id="app" v-else><!--否则的话就是登录页 -->
      <router-view></router-view>
  </div>
</template>

<script>
import './static/fonts/iconfont.css'
import './static/font/iconfont.css'
import './static/css/reset.css'
import HeaderBar from '@/components/HeaderBar'
export default {
  name: 'app',
  components: {
    HeaderBar
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    // this.$axios.post('http://localhost:1010',{},(data)=>{
    //   console.log(data)
    // })
  }
}
</script>
<style lang="less">
@import url(./static/css/base.less);
#app {
  .left-menu {
    position: fixed;
    top: .5rem;
    bottom: 0;
    left: 0;
    background: #fff;
    border-right: 1px solid #eee;
    overflow-y:auto;
    .el-menu {
      width: 200px;
      background: #fff;
      color: #666;
      .el-submenu .el-menu-item {
        color: #666
      }
      .el-menu-item-group__title,
      .el-submenu__title {
        color: #666
      }
      .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
      .el-menu-item.is-active {
       color: @base-color;
       background: lighten(@base-color,30%);

      }
      .el-submenu .el-menu-item:hover, .el-submenu__title:hover{
        color: @base-color;
        background: lighten(@base-color,30%);
      }
      .el-menu-item,
      .el-submenu__title {
        color: #666
      }
      .el-submenu .is-active .is-opened{
        color: #999;
      }
    }
    i{
      color: orange;
    }
  }
  .content{
    margin-left: 200px;
    padding: 80px 10px;
  }
}
</style>