<template>
  <div class="page"> 
    <div class="box" >
        <div class="top" v-for="(item,index) in chooseData" :key="index">
            <div class="textarea" >
             <h2>{{item.tit}}<span>{{item.value}}</span></h2>
                <ul>
                    <li v-for="(text,index1) in item.list" :key="index1"  >
                        <label class="toggle toggle-radio">
                            <input type="radio" :value='text'  v-model='item.value' :name="item.type"/>
                            <div class="letter">
                                {{ text }}
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="btn-group">
            <button class="cancel" @click="cancel">取消筛选</button>
            <button class="sure" @click="sure">确定</button>
        </div>
    </div>
  </div>
   
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  name: 'FilterBar',
  data () {
    return {
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAwJyBoZWlnaHQ9JzEwMDAnPiAgIDxwYXRoIGZpbGw9JyM4YTg2OWUnIGQ9J004NDAuMTYgNjguMDQ4aC02ODAuN2MtMzIuMDc1IDAtNTkuMDkyIDIyLjQ1NS02Ni4xNDYgNTIuNTQgNi4zMjUgMzUuNSAyOC40NjcgNzkuODk3IDUxLjg0OCAxMDAuNjhMMzk3LjczNyA0NDUuNzh2MzcwLjUxYzAgOS45IDExLjQyNiAyNi44MzcgMjAuNDI0IDMwLjQzNmwxODMuNzI1IDczLjQ4OHYtNDc0LjU5bDI1Mi43Ny0yMjIuOTYyYzIzLjU2Ni0yMC43ODcgNDUuODUzLTY1LjU1MiA1MS44NjUtMTAxLjA3Mi02LjY4OC0zMC43NjYtMzMuNzk3LTUzLjU0Mi02Ni4zNi01My41NDJ6TTI3Ljc4IDEwMi4wNzJDNDIuOTI2IDQzLjM3IDk2LjI1IDAgMTU5LjQ2IDBoNjgwLjdjNjQuMTIyIDAgMTE3Ljg4IDQ0LjI5IDEzMi4yMyAxMDQuMzI1bC41NTggMzIuMDg3Yy05LjQzNiA1MC4zNDMtMzguNjcgMTA2Ljc1NC03My4yODIgMTM3LjI4M0w2NjkuOTMgNDc2LjMzOHY0NzYuNTRjMCAzNy40Ny0yOC40MjQgNTYuNDc3LTYzLjIgNDIuNTY2bC0yMTMuODQyLTg1LjUzN2MtMzQuOTA0LTEzLjk2Mi02My4yLTU1Ljk2OC02My4yLTkzLjYxOFY0NzYuMzM0TDk5Ljk1MyAyNzIuMTI1Yy0zNC4xNTMtMzAuMzU1LTYzLjA3OC04Ni4wMi03Mi45LTEzNS45NmwuNzI3LTM0LjA5M3onLz4gPC9zdmc+',
      actived: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAwJyBoZWlnaHQ9JzEwMDAnPiAgIDxwYXRoIGZpbGw9JyNmZjRkNjQnIGQ9J00yNy43OCAxMDIuMDcyQzQyLjkyNiA0My4zNyA5Ni4yNSAwIDE1OS40NiAwaDY4MC43YzY0LjEyMiAwIDExNy44OCA0NC4yOSAxMzIuMjMgMTA0LjMyNWwuNTU4IDMyLjA4N2MtOS40MzYgNTAuMzQzLTM4LjY3IDEwNi43NTQtNzMuMjgyIDEzNy4yODNMNjY5LjkzIDQ3Ni4zMzh2NDc2LjU0YzAgMzcuNDctMjguNDI0IDU2LjQ3Ny02My4yIDQyLjU2NmwtMjEzLjg0Mi04NS41MzdjLTM0LjkwNC0xMy45NjItNjMuMi01NS45NjgtNjMuMi05My42MThWNDc2LjMzNUw5OS45NTMgMjcyLjEyNmMtMzQuMTUzLTMwLjM1Ni02My4wNzgtODYuMDItNzIuOS0xMzUuOTZsLjcyNy0zNC4wOTR6Jy8+IDwvc3ZnPg==',
      isActived: false,
      flag: true,
      chooseData: [
        {
          type: 'textarea',
          tit: '区域',
          selected: '不限',
          list: ['昌平区', '朝阳区', '崇文区', '大兴区', '东城区', '房山区', '丰台区', '海淀区', '怀柔区', '门头沟区', '密云区', '平谷区', '石景山区', '顺义区', '通州区', '西城区', '延庆区'],
          value: '不限'
        },
        {
          type: 'specital',
          tit: '特色',
          selected: '改签',
          list: ['退票', '改签', '观影小食', 'IMAX厅', '巨幕厅', 'realD厅', '4K厅', '4DX厅', '4D厅', '双机3D', '杜比厅'],
          value: '不限'
        }
      ]
    }
  },
  components: {
    HeaderBar
  },
  methods: {
    cancel () {
      this.flag = !this.flag
      this.$emit('cancel')
    },
    sure () {
      for (var i = 0; i < this.chooseData.length; i++) {
        this.$emit('sure', this.chooseData[i].value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
    padding-top: .4rem;
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
            display: flex;
            flex-wrap: wrap;
            padding: .08rem 0rem;
            box-sizing: border-box;
            padding-left: .16rem;
            li{
                width: 22%;
                color: #8a869e;
                font-size: .14rem;
                height: .35rem;
                line-height: .35rem;
                text-align: center;
                border: 1px solid #e5e5e5;
                margin: 0.03rem;
                border-radius: .02rem;
                input[type="radio"]{
                    display: none;
                }
                input[type="radio"]:checked + .letter{
                    border: 1px solid #ff4d64;
                    color: #ff4d64;
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
            background: transparent;
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
