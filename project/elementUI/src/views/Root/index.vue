<template>
    <div class="page">
        <h3>权限管理</h3>
        <template>
            <Alert type="warning">
                <h4>注意</h4><br>
                <template slot="desc" style="border:1px solid #666;">
                   <div class="box" style="border:1px solid #999;">
                     <b>1、系统管理员默认拥有高级权限，如您不是薪酬负责人请立即移交权限。</b> <br>
                     <b> 2、修改薪酬管理权限时，会向所有具备薪酬管理权限的管理员发送短信，通知修改信息。</b> <br>
                      <b>3、系统管理员默认拥有高级权限，如您不是薪酬负责人请立即移交权限。</b> <br>
                      <b>4、修改薪酬管理权限时，会向所有具备薪酬管理权限的管理员发送短信，通知修改信息。</b> <br>
                      <b>5、系统管理员默认拥有高级权限，如您不是薪酬负责人请立即移交权限。</b> <br>
                      <b>6、修改薪酬管理权限时，会向所有具备薪酬管理权限的管理员发送短信，通知修改信息。</b> 
                  </div>
                </template>
            </Alert>
        </template>
        <el-button type="primary" @click="dialogFormVisible = true" style="float:right">添加角色</el-button>
        <template>
            <el-table
                :data="tableData"
                style="width: 80%"
                :row-class-name="tableRowClassName">
                <el-table-column
                prop="name"
                label="角色"
                width="180">
                </el-table-column>
                <el-table-column
                 label="权限功能"
                 width="180">
                  <template scope="scope">  <!--split字符串转成数组-->
                    <el-tag style="width:70px;display:inline-block" type="warning" v-for="item in (scope.row.rule.split(','))">{{item | filter}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                   label="操作">
                    <template scope="scope">
                    <el-button 
                      type="text" 
                      size="small" 
                      @click.native="editRoot = true; editItem=scope.row"  
                    >编辑</el-button> <!--scope.row 行号定义一个editItem为空对象用来修改数据 .native在根元素上监听元素事件v-on-->
                  </template>
                </el-table-column>
            </el-table>
        </template>
        <!--编辑弹出框 .sync修饰符子组件发送变化时候也会同步到父组件上,自动更新父组件上的v-on侦听器-->
        <el-dialog
            title="编辑权限"
            :visible.sync="editRoot"
            size="big"
            :before-close="handleClose">
            <el-transfer v-model="value" :data="data"></el-transfer><!--弹出框里面进行权限选择-->
            <span slot="footer" class="dialog-footer">
              <el-button @click="editRoot = false">取消</el-button>
              <el-button type="primary" @click="editSure">确 定</el-button>
            </span>
       </el-dialog>

       <!--添加角色-->
         <el-dialog title="添加角色" :visible.sync="dialogFormVisible" size="tiny" top="10%">
             <el-form :model="form" style="margin-left:-40px;">
                <el-form-item label="角色" :label-width="formLabelWidth">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="权限功能" style="margin-left:45px;">
                  <el-select v-model="form.rule" placeholder="请选择权限">
                    <el-option label="企业服务" value="企业服务"></el-option>
                    <el-option label="企业管理" value="企业管理"></el-option>
                    <el-option label="工资条" value="工资条"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
             <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addRole">确 定</el-button>
             </div>
       </el-dialog>
    </div>
</template>
<script>
import {routerArr} from '../../router'
  export default {
    methods: {
      addRole () {//actions里面写的方法名 this.from就是里面所有的信息 id name phone等
         this.$store.dispatch('user/addRole',this.form).then(
            (data)=>{
               this.$store.dispatch('user/getRootList').then(
                (data)=>{
                   this.tableData =  data
                   this.dialogFormVisible = false
                   this.form = {}
              })
            }
          )
      },
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    //  更新页面中的权限 通过编辑
     editSure() {
        this.$store.dispatch('user/getUserRoot',{
          id: this.editItem.id,
          rule: this.value.join(',')
        }).then( 
          (data) =>{
            // console.log(data)
            this.editRoot = false;//点击确定关闭弹框
            this.editItem.rule = this.value.join(',');//将修改后的数据赋给原值 原值是数组 转成字符串
            this.value = [];//再次点击编辑的时候 将列表2的值清空
          },
          (error) =>{
           console.log(error)
         }
        )
     }
    },
    // 将数据库中的root表渲染到页面 
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <routerArr.length; i++) { //权限管理不能编辑 所以从1开始遍历
          data.push({
            key: routerArr[i].name, //根据每个路由的name名不一样 选择的时候不一样
            label: `${routerArr[i].meta.title}`
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [],
        tableData: [],
        editRoot: false,
        editItem: {},  // 用来修改数据
        dialogFormVisible: false,
        formLabelWidth: '120px',
        input: '',
        form: {
          name: '',
          rule: ''
        },
      };
    },
    filters: { //自定义过滤器讲功能模块中的英文字段转成中文
      filter: function (value) {
      if (!value) return ''
      value = value.toString()
      for(let i=0;i<routerArr.length;i++){
          if(value == routerArr[i].name){
              value = routerArr[i].meta.title
          }
      }
      return value
    }
   },
    created () { //将数据库的角色 功能权限渲染到tableData中
      this.$store.dispatch('user/getRootList').then(
        (data)=>{
          this.tableData =  data
      })
    } 
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
h3{
  border-bottom: 1px solid #eee;
  padding-bottom: .1rem;
}
h4{
  color: #666;
  padding-left: 2px;
  padding-top:1px;
}
b{
    font-weight: 400;
    padding-left: 20px;
}
span{
    color: #242424;
    margin-left: -.05px;
    margin-bottom: 5px;
}
.box{
    width: 80%;
    padding: 10px 0;
    margin-bottom: 20px;
}
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
