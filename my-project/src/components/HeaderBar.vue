<template>
  <header class="header">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: .4rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  box-sizing: border-box;
  .left,.right{
    height: .4rem;
    line-height: .4rem;
    i.fa{
      color: #928ea5;
      font-size: .18rem;
    }
    a{
      font-size: .18rem;
      color:#ccc;
      padding-left: .15rem;
      padding-right: .05rem;
    }
  }
}
</style>
