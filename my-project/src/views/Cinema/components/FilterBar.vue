<template>
  <div class="page"> 
    <div class="box" >
     <a href="javascript:;" :class="{'filter-btn':true, 'filter-active': filterShow}" @click="filterShow = !filterShow">筛选
        <div class="top">
            <div class="textarea" >
                <ul v-show='filterShow'>
                  <h2>区域: {{filterArr[0]}}</h2>
                    <li>
                        <Radio
                              v-for="(item,index) in regionNames"
                              :key="index"
                              name='regionNames' 
                              :value='item' 
                              v-model="filterArr[0]" 
                              :label="item"
                        ></Radio>
                    </li>
                  <li class="menu" >
                     <h2>特色: {{filterArr[1]}}</h2>
                      <div class="list" v-for="(items,index1) in supports" :key="index1">  
                        <Radio
                              :key="index1"
                              name='supports' 
                              :value='items.desc' 
                              v-model="filterArr[1]" 
                              :label="items.desc"   
                        ></Radio>
                       </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="btn-group">
            <button class="cancel" @click="cancel">取消筛选</button>
            <button class="sure" @click="sure">确定</button>
        </div>
      </a>
    </div>
  </div>
   
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import Radio from '@/components/Radio'
import Checkbox from '@/components/Checkbox'
export default {
  name: 'FilterBar',
  data () {
    return {
          filterShow: false,
          filterArr: ['',''],
          regionNames: ["宝山区","崇明县","奉贤区","虹口区","黄浦区","嘉定区","静安区","金山区","卢湾区","闵行区","浦东新区","普陀区","青浦区","松江区","徐汇区","杨浦区","闸北区","长宁区"],
          supports:[{"supportCode":"8","desc":"退票"},{"supportCode":"23","desc":"改签"},{"supportCode":"3","desc":"观影小食"},{"supportCode":"11","desc":"IMAX厅"},{"supportCode":"12","desc":"巨幕厅"},{"supportCode":"17","desc":"realD厅"},{"supportCode":"16","desc":"4K厅"},{"supportCode":"20","desc":"4DX厅"},{"supportCode":"13","desc":"4D厅"},{"supportCode":"18","desc":"双机3D"},{"supportCode":"15","desc":"杜比厅"}]
    }
  },
  props:['filterVal'],
  components: {
    HeaderBar,
    Radio,
    Checkbox
  },
  created() {
    if(this.filterVal){
        this.filterArr=this.filterVal
    }
  },
  watch: {
    'filterVal': function(){
        this.filterArr=this.filterVal
        if( this.filterArr.length <= 1){
            this.filterArr=["",""]
        }
    }
  },
  methods: {
    cancel () {
        this.$set(this.filterArr,0,'')
        this.$set(this.filterArr,1,'')
        this.$emit('update:filterVal', this.filterArr)
    },
    sure () {
        this.$emit('update:filterVal', this.filterArr)
        console.log(this.filterArr)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
    background:#fff;
    .top{
        margin-top: .2rem;
        h2{
            padding-left: .2rem;
            color: #50505a;
            font-size: .14rem;
            span{
                color: #ff4d64;
                font-size: .12rem;
                padding-left: .05rem;
            }
        }
        ul{
            position: fixed;
            top: 0.44rem;
            bottom: 0;
            right: 0;
            left: 0;
            background: #fff;
            h2{
              padding-top:.2rem;
              padding-bottom: .15rem;
            }
            li{
                display: flex;
                flex-wrap:wrap;
                align-items: center;
                color: #8a869e;
                font-size: .14rem;
                height: .35rem;
                line-height: .35rem;
                text-align: center;
                margin: 0 auto;
                border-radius: .02rem;
                width: 100%;
                padding-left: .04rem;
                .box{
                  text-align: center;
                  padding: 0 .05rem;
                  label{
                      border: 1px solid #e5e5e5;
                  }
                }
            }
            .menu{
              padding-top:1.5rem;
              h2{
                  width: 100%;
                  text-align: left;
              }
            }
        }
    }
    .btn-group{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.1rem .2rem;
        box-sizing: border-box;
        position: fixed;
        bottom: 0;
        left: 0;
        .cancel{
            width: 50%;
            background: #fff;
            border: none;
            border: 1px solid #908ca3;
            color: #908ca3;
            font-size: .14rem;
            border-radius: .03rem;
            height: .44rem;
            line-height: .44rem;
            margin: 0 .08rem;
        }
        .sure{
            width: 50%;
            background: #ff4d64;
            color: #fff;
            font-size: .14rem;
            border-radius: .03rem;
            height: .44rem;
            line-height: .44rem;
            margin: 0 .08rem;
            border: none;
        }
    }
}

</style>
