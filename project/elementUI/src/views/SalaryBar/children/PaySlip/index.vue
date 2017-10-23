<template>
 <div class="page">
    <div class="box">
      <div class="left">
          <h3>2017年01月薪资详情</h3>
      </div>
      <div class="right">
          <div class="file">
              <i class="icon iconfont icon-xiazai"></i>
             <span>文件传输</span>
          </div>
          <div class="history">
              <i class="icon iconfont icon-liebiao9"></i>
              <span>修改历史</span>
          </div>
      </div>
    </div>
      <div class="top">
          <ul>
            <li>
               
               <a href="javascript:;"><i class="el-icon-date"></i>实发总金额</a>
               <h3>123,456.00</h3>
            </li>
            <li>
            
               <a href="javascript:;">  <i class="el-icon-check"></i>状态</a>
               <h3>部分撤回</h3>
            </li>
            <li>
             
              <a href="javascript:;"> <i class="el-icon-time"></i>发送时间</a>
              <h3>02月11日 14:00:00</h3>
            </li>
            <li>
             
              <a href="javascript:;"><i class="el-icon-circle-check"></i>已确认</a>
              <h3>27</h3>
            </li>
            <li>
            
              <a href="javascript:;">  <i class="el-icon-information"></i>警告</a>
              <h3 style="color:red">2</h3>
            </li>
          </ul>
          <div class="bottom">
           <time>07月11日 14:00</time> 
           <h4>取消定时 立即发送</h4>     
          </div>
      </div>
    <div class="main">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item >
          <el-input
          placeholder="搜索姓名"
          icon="search"
          v-model="input"
          width="100px"
          :on-icon-click="handleIconClick">
        </el-input>
        </el-form-item>
        <el-form-item :inline="true">
          <el-select v-model="formInline.method" placeholder="发送方式:短信" label-width="100px">
            <el-option label="电话" value="电话"></el-option>
            <el-option label="email" value="email"></el-option>
          </el-select>
          <el-select v-model="formInline.case" placeholder="发送情况:已发送">
            <el-option label="全部" value="全部"></el-option>
            <el-option label="未发送" value="未发送"></el-option>
            <el-option label="已发送" value="已发送"></el-option>
            <el-option label="已撤回" value="已撤回"></el-option>
          </el-select>
          <el-select v-model="formInline.situation" placeholder="确认情况">
            <el-option label="已确认" value="已确认"></el-option>
            <el-option label="未确认" value="未确认"></el-option>
          </el-select>
          <span style="padding-left:.1rem">结果数/总数:3/3</span>
        </el-form-item>
      </el-form>
      <template>
      <el-table
        ref="multipleTable"
        :data="tableData3"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          label="全选"
          width="55">
        </el-table-column>
        <el-table-column
          label="姓名"
          width="120">
         <template scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机"
          width="120">
        </el-table-column>
        <el-table-column
          prop="salary"
          label="工资"
          show-overflow-tooltip>
        </el-table-column>
         <el-table-column
          prop="state"
          label="员工状态"
          width="120">
        </el-table-column>
         <el-table-column
          prop="method"
          label="发送方式"
          width="120"
          :filters="[{ text: '电话', value: '电话' }, { text: '短信', value: '短信' },{ text: 'email', value: 'email' }]"
          :filter-method="flg"
          filter-placement="bottom-end">
          <template scope="scope">
            <el-tag
              :type="scope.row.method === '电话' ? 'primary' : 'success'"
              close-transition>{{scope.row.method}}
            </el-tag>
          </template>
        </el-table-column>
         <el-table-column
          prop="case"
          label="发送情况"
          width="120"
          :filters="[{ text: '已发送', value: '已发送' }, { text: '已撤回', value: '已撤回' }]"
          :filter-method="flag"
          filter-placement="bottom-end">
          <template scope="scope">
            <el-tag
              :type="scope.row.send === '已发送' ? 'primary' : 'success'"
              close-transition>{{scope.row.send}}
            </el-tag>
          </template>
        </el-table-column>
         <el-table-column
            prop="situation"
            label="确认情况"
            width="120"
            :filters="[{ text: '已确认/已读', value: '已确认/已读' }, { text: '未确认/未读', value: '未确认/未读' }]"
            :filter-method="flgs"
            filter-placement="bottom-end">
            <template scope="scope">
              <el-tag
                :type="scope.row.situation === '已确认/已读' ? 'primary' : 'success'"
                close-transition>{{scope.row.situation}}
            </el-tag>
          </template>
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
                size="small"
                @click="edit(scope.$index, scope.row)">详情</el-button>
              <el-button
                size="small"
                type="danger"
                @click="back(scope.$index, scope.row)">撤回</el-button>
            </template>
          </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </template>
    <template>
         <div class="block" style="padding-top:20px;float:right">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
        </div>
    </template>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'PaySlip',
   data() {
      return {
        input: '',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        formInline: {
          user: '',
          method: '',
          case:'',
          situation:''
        },
          tableData3: [{
           name: 'wky',
           phone: '12345678',
           salary: '44444444',
           send: '已发送',
           method: '电话',
           state: '在职',
           situation: "已确认/已读"
         }, {
           name: 'zcz',
           phone: '14532423',
           salary: '5222221',
           send: '已发送',
           method: '电话',
           state: '离职',
           situation: "未确认/未读"
         }],
        multipleSelection: []
        }
      
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleIconClick(ev) {
      console.log(ev);
     },
      formatter(row, column) {
          return row.address;
      },
      //发送情况
      flag(value, row) {
        return row.send === value;
      },
      //发送方式
      flg(value, row) {
        return row.method === value;
      },
      //确认情况
      //点击详情
      flgs(value, row) {
        return row.situation === value;
      },
      edit(index, row) {
        console.log(index, row);
      },
      //点击撤回
      back(index, row) {
        console.log(index, row);
      },
      //分页查询
      handleSelectionChange(val) {
          this.multipleSelection = val;
        },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .box{
    display: flex;
    justify-content: space-between;
    padding: 0 .2rem;
    box-sizing: border-box;
    .left{
      h3{
         font-weight: 400;
      }
    }
    .right{
      display: flex;
      .history{
        padding: 0 .1rem;
      }
    }
  }
  .top{
      margin-top: .2rem;
      position: relative;
      ul{
        display: flex;
        border: 1px solid #eee;
        border-bottom: 0;
        li{
          width: 25%;
          display: flex;
          align-items: center;
          flex-direction: column;
          border-right: 1px solid #eee;
          a{
            color: #ccc;
            padding: 18px 0;
            i{
              padding-right: 6px;
            }
          }
          h3{
            font-weight: 400;
            font-size: .2rem;
          }
        }
      }
      .bottom{
        position: absolute;
        bottom: -80px;
        left: 600px;
        time{
          color: orange;
          font-size: .14rem;
        }
        h4{
          color: skyblue;
          font-weight: 400;
          font-size: .14rem;
          padding-top: .1rem;
        }
      }
    }
    .main{
      padding-top: 140px;
    }

</style>
