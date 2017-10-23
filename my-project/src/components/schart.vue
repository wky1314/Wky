<template>
        <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data="data"
            :options="options"
            class="scharts"
        ></schart>
</template>
<script>
import schart from 'vue-schart';
export default {
    data() {
        return {
            canvasId: 'myCanvas',
            type: 'line',
            width: 300,
            height: 230,
            data: [
                {name: '2014', value: 1342},
                {name: '2015', value: 2123},
                {name: '2016', value: 1654},
                {name: '2017', value: 1795},
            ],
            options:{

            }
        }
    },
    components:{
        schart
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
  font-size: 20px;
  .scharts{
    margin-left: .3rem;
    margin-top: .1rem;
  }
}
</style>
