<template>
  <div class="page"> 
      <a href="javascript:;" :class="{'filter-btn':true, 'filter-active': flag
      }" @click="flag = !flag">搜索
      <header class="header" v-show="flag">
          <div class="search" >
              <i class="fa fa-search"></i>
              <input type="text" placeholder="影院名称或地址">
              <div class="cancel">
                <span @click="clear">取消</span>
              </div>
          </div>
      </header>
      </a>
   </div>
</template>

<script>
export default {
  name: 'SearchData',
  data () {
    return {
      flag: false
    }
  },
  components: {
  },
  methods: {
    clear () {
      this.$emit('clear')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
    border-bottom: 1px solid #e5e5e5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    height: .43rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
    box-sizing: border-box;
    .search{
      position: relative;
      width: 90%;
      input{
        width: 100%;
        height: .25rem;
        border: 1px solid #e5e5e5;
        border-radius: .04rem;
        padding: 0 .3rem;
        box-sizing: border-box;
      }
      input::-webkit-input-placeholder{
        color: #999;
        font-size: .12rem;
      }
      i.fa{
        position: absolute;
        top: 0.04rem;
        left: 0.06rem;
        color: #ccc;
      }
      .cancel{
        position: absolute;
        right: -.4rem;
        top: .04rem;
        color: #108ee9;
        font-size: .14rem;
      }
    }
}
.box{
  background: #fff;
}
</style>
