<template>
   <div class="page"> 
   <FooterBar></FooterBar>
   {{count}} {{num}} {{getFn}}
   {{$store.getters.getCount}}
   {{$store.getters.getCount}}
   {{$store.getters.getCount}}
   <button @click="add">点击</button>
   </div>
</template>
<script>
// Action 类似于 mutation，不同在于：
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// 你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
import FooterBar from '@/components/FooterBar'
import { mapState,mapGetters } from 'vuex'
export default {
   components: {
      FooterBar
   },
   computed: {
     getFn () {
       return this.$store.state.count
     },
     ...mapState([ //对象展开运算符
       'count',
       'num'

     ]),
     ...mapGetters([
       //将store中的getters映射到局部计算属性
        'getCount'
     ])
   },
   methods: {
     add () {
      //  this.$store.commit('increment') mutations用commit触发
      this.$store.dispatch('increment',2) //actions用dispatch触发 
     }
   }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
