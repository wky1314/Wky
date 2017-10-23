<template>
  <div class="page">
     <h3>员工反馈</h3>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="person"
          label="反馈人"
          width="100">
        </el-table-column>
        <el-table-column
          prop="month"
          label="发薪月份"
          width="100">
        </el-table-column>
        <el-table-column
          prop="classify"
          width='100'
          label="发薪类别">
        </el-table-column>
        <el-table-column
          prop="contain"
          width="280"
          label="反馈内容">
        </el-table-column>
        <el-table-column
          prop="state"
          label="处理状态">
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作">
        </el-table-column>
      </el-table>
  </template>
     <div class="block" style="float:right;padding-top:.2rem;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeFeedback',
    data() {
        return {
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
          tableData: [{
            person: '李俊义',
            month: '2016-09',
            classify: '月薪',
            contain:'公积金为什么比上个月少了？查看详情',
            state:'未处理',
            operation:'查看工资信息 立即处理'
          }, {
            person: '李俊义',
            month: '2016-09',
            classify: '月薪',
            contain:'公积金为什么比上个月少了？查看详情',
            state:'未处理',
            operation:'查看工资信息 立即处理'
          }, {
             person: '李俊义',
              month: '2016-09',
              classify: '月薪',
              contain:'公积金为什么比上个月少了？查看详情',
              state:'未处理',
              operation:'查看工资信息 立即处理'
          }, {
            person: '李俊义',
            month: '2016-09',
            classify: '月薪',
            contain:'公积金为什么比上个月少了？查看详情',
            state:'未处理',
            operation:'查看工资信息 立即处理'
          }]
        }
      },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
h3{
  font-weight: 400;
  border-bottom: 1px solid #eee;
  padding-bottom: .1rem;
  margin-bottom: 15px;
}

</style>
