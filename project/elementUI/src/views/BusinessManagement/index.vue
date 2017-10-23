<template>
  <div class="page">
  <!--路由片段记录 $route.matched-->
      <el-breadcrumb separator="/" style="line-height:60px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for='item in $route.matched'>{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BusinessManagement'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
