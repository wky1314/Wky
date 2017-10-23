<template>
  <div class="employeeFile">
      <el-form :inline="true"   class="demo-form-inline" style="float:left" >
          <el-form-item label="">
             <el-input  placeholder="搜索姓名,手机号"  icon="search" v-model="filter.name"></el-input>
          </el-form-item>
          <el-form-item>
             <el-button type="primary">搜索</el-button>
          </el-form-item>
    </el-form>
     <el-button type="primary" @click="dialogFormVisible = true" style="float:right">添加员工</el-button>
    <el-dialog title="单个录入员工" :visible.sync="dialogFormVisible" size="tiny" top="10%">
            <el-form :model="form" style="margin-left:-40px;">
              <el-form-item label="*员工姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="*员工薪酬" :label-width="formLabelWidth">
                <el-input v-model="form.payment" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="*手机号码" :label-width="formLabelWidth">
                <el-input v-model="form.phone" auto-complete="off"></el-input>
              </el-form-item>
               <el-form-item label="*身份证号" :label-width="formLabelWidth">
                <el-input v-model="form.idCard" auto-complete="off"></el-input>
              </el-form-item>
               <el-form-item label="*员工性别" :label-width="formLabelWidth">
                   <el-radio-group v-model="form.sex">
                      <el-radio label="男" value="1"></el-radio>
                      <el-radio label="女" value="0"></el-radio>
                   </el-radio-group>
              </el-form-item>
              </el-form-item>
               <el-form-item label="*员工学历" :label-width="formLabelWidth">
                <el-select v-model="form.education" placeholder="请选择你的学历">
                  <el-option label="专科" value="专科"></el-option>
                  <el-option label="本科" value="本科"></el-option>
                </el-select>
              </el-form-item>
               <el-form-item label="*所属部门" :label-width="formLabelWidth">
                <el-select v-model="form.department" placeholder="请选择你所属的部门">
                  <el-option label="市场部" value="市场部"></el-option>
                  <el-option label="技术部" value="技术部"></el-option>
                  <el-option label="人资部" value="人资部"></el-option>
                </el-select>
                </el-select>
              </el-form-item>
            </el-form>
             <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addEmployee">确 定</el-button>
             </div>
    </el-dialog>
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column type="expand">
          <template scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="姓名">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="状态">
                <span>{{ props.row.state }}</span>
              </el-form-item>
              <el-form-item label="身份证">
                <span>{{ props.row.idCard }}</span>
              </el-form-item>
                <el-form-item label="薪资">
                <span>{{ props.row.payment }}</span>
              </el-form-item>
              <el-form-item label="学历">
                <span>{{ props.row.education }}</span>
              </el-form-item>
              <el-form-item label="手机号码">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="id">
                <span>{{ props.row.id }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="id"
          label="id"
          width="100">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          width="100">
            <template scope="scope">
                {{scope.row.sex === '0' ? '男' : '女'}}
              </template>
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="state"
          label="员工状态"
          width="100">
            <template scope="scope">
                {{scope.row.state === '1' ? '在职' : '离职'}}
              </template>
        </el-table-column>
        <el-table-column
          prop="idCard"
          label="身份证"
          width="100">
        </el-table-column>
        <el-table-column
          prop="education"
          label="学历"
          width="100">
        </el-table-column>
        <el-table-column
        
          label="操作"
          width="200">
          <template scope="scope">
            <el-button size="small" @click="deleteList(scope.row)">删除</el-button>
            <el-button  size="small"  @click="addFileEditList(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
      <!--点击编辑的时候 可以编辑本列的信息 做到更新-->
      <el-dialog title="单个录入员工" :visible.sync="dialog" size="tiny" top="10%">
            <el-form :model="editItem" style="margin-left:-40px;">
              <el-form-item label="*员工姓名" :label-width="formLabelWidth">
                <el-input v-model="editItem.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="*员工薪酬" :label-width="formLabelWidth">
                <el-input v-model="editItem.payment" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="*手机号码" :label-width="formLabelWidth">
                <el-input v-model="editItem.phone" auto-complete="off"></el-input>
              </el-form-item>
               <el-form-item label="*身份证号" :label-width="formLabelWidth">
                <el-input v-model="editItem.idCard" auto-complete="off"></el-input>
              </el-form-item>
               <el-form-item label="*员工性别" :label-width="formLabelWidth">
                   <el-radio-group v-model="editItem.sex">
                      <el-radio label="男" value="1"></el-radio>
                      <el-radio label="女" value="0"></el-radio>
                   </el-radio-group>
              </el-form-item>
              </el-form-item>
               <el-form-item label="*员工学历" :label-width="formLabelWidth">
                <el-select v-model="editItem.education" placeholder="请选择你的学历">
                  <el-option label="专科" value="专科"></el-option>
                  <el-option label="本科" value="本科"></el-option>
                </el-select>
              </el-form-item>
               <el-form-item label="*所属部门" :label-width="formLabelWidth">
                <el-select v-model="editItem.department" placeholder="请选择你所属的部门">
                  <el-option label="市场部" value="市场部"></el-option>
                  <el-option label="技术部" value="技术部"></el-option>
                  <el-option label="人资部" value="人资部"></el-option>
                </el-select>
                </el-select>
              </el-form-item>
            </el-form>
             <div slot="footer" class="dialog-footer">
                <el-button @click="dialog = false">取 消</el-button>
                <el-button type="primary" @click="sure">确 定</el-button>
             </div>
    </el-dialog>
      <div class="block" style="text-align:right">
        <el-pagination
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="count"
          @current-change="handleCurrentChange"
          >
        </el-pagination>
      </div>
  </div>
</template>
<script>
export default {
  name: 'EmployeeFile',
  data () {
    return {
      tableData: [], 
      page: 0,
      pageSize: 10,
      count: 0,
      dialogFormVisible: false,
      dialog: false,
      key: '',
      filter: {
        name: ''
      },
      //模糊查询 传一个对象 对象里面就是模糊的字段 在后台当成参数传达过去
      //更新的数据
      editItem: {
        name: '',
        phone: '',
        idCard: '',
        payment: '',
        education: '',
        department: '',
        state: '',
        sex:''
      },
      //原先的数据
      form: {
        name: '',
        phone: '',
        idCard: '',
        payment: '',
        education: '',
        department: '',
        state: '',
        sex:''
      },
      formLabelWidth: '120px'
    }
  },
  created () {
    this.getMemberList()
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val-1,
      this.getMemberList(this.page, this.pageSize)
    },
    //分页查询
    getMemberList(page=0,pageSize=10) {//actions里面写的方法名
         this.$store.dispatch('EmployeeFile/getMemberList',{ 
            page,
            pageSize,
            filter:{
              name: '王'
            }
          }).then(
            (data)=>{
              this.tableData=data.data
              this.count=data.count
            }
          )
      },
      //添加员工
    addEmployee () {//actions里面写的方法名 this.from就是里面所有的信息 id name phone等
         this.$store.dispatch('EmployeeFile/addMember',this.form).then(
            (data)=>{
              console.log(data)
              this.dialogFormVisible = false
              this.page=0;
              this.getMemberList(this.page, this.pageSize)
              this.form = {};
            }
          )
      },
      //修改信息 点击编辑的时候
     addFileEditList(row) {
        //this.editItem = row;
         this.editItem = JSON.parse(JSON.stringify(row)); //解决引用类型 同一指向问题 对象转化
         //Object.assign( this.editItem, row )  //对象拷贝
        //  this.editItem = {...row};  //扩展运算符
        this.dialog=true;
     },
     //点击确定按钮
     sure () {
         this.dialog = false;
         this.$store.dispatch('EmployeeFile/addFileEditList',this.editItem).then( 
          (data) =>{
            console.log(data)
            this.getMemberList(this.page, this.pageSize)
          },
          (error) =>{
           console.log(error)
         }
        )
     },
     //点击删除按钮
     deleteList (row) {
         this.$store.dispatch('EmployeeFile/deleteList',row).then( 
          (data) =>{
             this.getMemberList()
             console.log(data)
          },
          (error) =>{
           console.log(error)
         }
        )
      }
     //点击搜索 进行模糊查询
    //  selectList (key) {
    //     this.$store.dispatch('EmployeeFile/selectList',this.key).then(
    //       (data) => {
    //          this.tableData=data;
    //          console.log(data)
    //       },
    //       (error) => {
    //         console.log(error)
    //       }
    //     )
    //  }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
