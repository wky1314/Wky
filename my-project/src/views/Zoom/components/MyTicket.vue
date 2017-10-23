<template>
  <div class="page"> 
    <div class="title">
         <p>空空如也~</p>
    </div>
     
  </div>
   
</template>
<script>
export default {
  name: 'MyTicket',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
    .title{
        position: fixed;
        z-index: 9;
        width: 100%;
        height: 100%;
        display: table;
        transition: opacity .3s ease;
        p{
            display: table-cell;
            position: relative;
            width: 120px;
            height: 120px;
            font-size: 18px;
            text-align: center;
            vertical-align: middle;
        }
    }
}

</style>
