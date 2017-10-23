<template>
  <div id="app">
  <keep-alive include="movie">
     <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>

import '@/static/css/font-awesome.min.css'
import '@/static/css/reset.css'
import '@/static/css/common.css'
import '@/static/css/swiper.min.css'
export default {
  name: 'app'
}
</script>

<style lang="less">
#app{
  .swiper-pagination-bullet{
    background: #e5e8e8;
   }
  .swiper-pagination-bullet-active{
     background: #ff5733;
  }
}
</style>
