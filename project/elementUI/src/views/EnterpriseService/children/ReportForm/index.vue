<template>
  <div class="page">
    <template>
       <h3>报表</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="趋势分析" name="first">趋势分析</el-tab-pane>
          <el-tab-pane label="薪酬占比" name="second">薪酬占比</el-tab-pane>
          <el-tab-pane label="薪酬对比" name="third">薪酬对比</el-tab-pane>
          <el-tab-pane label="增长趋势" name="fourth">增长趋势</el-tab-pane>
           <el-tab-pane label="构成分布" name="fifth">构成分布</el-tab-pane>
            <el-tab-pane label="构成对比" name="sixth">构成对比</el-tab-pane>
             <el-tab-pane label="范围分布" name="seventh">范围分布</el-tab-pane>
        </el-tabs>
    </template>
     <div id="main" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>
export default {
  name: 'ReportForm',
  data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
       getMonthArr () {
          var MonthArr = [];
          var month = new Date().getMonth()+1;
          for(var i=0 ;i<12;i++){
              if( month-i < 1 ){
                  MonthArr.unshift(12+(month-i)+"月")
              }else{
                  MonthArr.unshift(month-i+"月")
              }
          }
          return MonthArr;
      }
    },
    mounted () {
      this.getMonthArr()
      var myChart = this.$Echarts.init(document.getElementById('main'));
      var option = {
                title: {
                    text: '薪资趋势图'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['发薪人数','薪资总支出']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : this.getMonthArr()
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        position: 'left',
                    }, {
                        type: 'value',
                        position: 'right'
                    }
                    
                ],
                series : [
                    {
                        name:'发薪人数',
                        type:'line',
                        smooth: true,
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[100, 120, 120, 125, 200, 250, 100,120, 125, 200, 250, 100],
                        areaStyle: {
                            normal: {
                                color: new this.$Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 220, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 50, 120)'
                                }])
                            }
                        },
                    },
                    {
                        name:'薪资总支出',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        areaStyle: {normal: {}},
                        yAxisIndex: 1,
                        data:[200000, 150000, 200000, 220000, 180000, 200000, 190000,200000, 150000, 200000, 220000, 180000],
                        areaStyle: {
                            normal: {
                                color: new this.$Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 0, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 20, 131)'
                                }])
                            }
                        },
                    }
                    
                ]
            };
    myChart.setOption(option);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
 h3{
  font-weight: 400;
  border-bottom: 1px solid #eee;
  padding-bottom: .1rem;
}
</style>
