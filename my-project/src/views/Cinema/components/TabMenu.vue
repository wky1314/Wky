<template>
  <nav class="tab-menu">
    <a v-for="(item, index) in menuList" href="javascript:;" :class="{active: isActive == index}"  @click="tabClick(index)"
    :key="index">{{item}}</a>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      isActive: 0,
      menuList: ['筛选', '搜索']
    }
  },
  methods: {
    tabClick (index) {
      this.isActive = index
      this.$emit('tabList', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tab-menu{
    a{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: .14rem;
        position: relative;
        text-align: center;
        color: #50505a;
        text-decoration: none;
        padding:0 0.05rem;
        margin:0 0.05rem;
        position: relative;
        &.active{
            color: #ff4d64;
            &:after{
                background: #ff4d64;
            }
        }
    }
}
</style>
