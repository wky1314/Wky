<template>
  <div class="page">
      <h3>工资条管理</h3>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-select v-model="formInline.region" placeholder="发薪月份">
            <el-option label="一月" value="一月"></el-option>
            <el-option label="二月" value="二月"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="formInline.region" placeholder="发薪类型">
            <el-option label="一月" value="一月"></el-option>
            <el-option label="二月" value="二月"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!--筛选-->
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        :closable="true"
        :close-transition="false"
        @close="handleClose(tag)"
      >
      {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="mini"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">清除筛选项</el-button>
    <div class="box">
       <div class="list">
           <div class="head">
              <dl>
                 <dt>41人</dt>
                 <dd>2016年7月工资单</dd>
              </dl>
              <div class="icon"></div>
           </div>
           <div class="bottom">
               <ul>
                 <li><i class="icon fa fa-flag"></i>未发送</li>
                 <li><i></i>401,032.00</li>
                 <li><i></i>0人</li>
                 <li><i></i>3人</li>
                 <li><i></i>bobo</li>
                 <li><i></i>06-02 14:00</li>
               </ul>
           </div>
       </div>
       <div class="list">
           <div class="head">
              <dl>
                 <dt>41人</dt>
                 <dd>2016年7月工资单</dd>
              </dl>
              <div class="icon"></div>
           </div>
           <div class="bottom">
               <ul>
                 <li><i class="icon fa fa-flag"></i>未发送</li>
                 <li><i></i>401,032.00</li>
                 <li><i></i>0人</li>
                 <li><i></i>3人</li>
                 <li><i></i>bobo</li>
                 <li><i></i>06-02 14:00</li>
               </ul>
           </div>
       </div>
       <div class="list">
           <div class="head">
              <dl>
                 <dt>41人</dt>
                 <dd>2016年7月工资单</dd>
              </dl>
              <div class="icon"></div>
           </div>
           <div class="bottom">
               <ul>
                 <li><i class="icon fa fa-flag"></i>未发送</li>
                 <li><i></i>401,032.00</li>
                 <li><i></i>0人</li>
                 <li><i></i>3人</li>
                 <li><i></i>bobo</li>
                 <li><i></i>06-02 14:00</li>
               </ul>
           </div>
       </div>
       <div class="list">
           <div class="head">
              <dl>
                 <dt>41人</dt>
                 <dd>2016年7月工资单</dd>
              </dl>
              <div class="icon"></div>
           </div>
           <div class="bottom">
               <ul>
                 <li><i class="icon fa fa-flag"></i>未发送</li>
                 <li><i></i>401,032.00</li>
                 <li><i></i>0人</li>
                 <li><i></i>3人</li>
                 <li><i></i>bobo</li>
                 <li><i></i>06-02 14:00</li>
               </ul>
           </div>
       </div>
       <div class="list">
           <div class="head">
              <dl>
                 <dt>41人</dt>
                 <dd>2016年7月工资单</dd>
              </dl>
              <div class="icon"></div>
           </div>
           <div class="bottom">
               <ul>
                 <li><i class="icon fa fa-flag"></i>未发送</li>
                 <li><i></i>401,032.00</li>
                 <li><i></i>0人</li>
                 <li><i></i>3人</li>
                 <li><i></i>bobo</li>
                 <li><i></i>06-02 14:00</li>
               </ul>
           </div>
       </div>
       <div class="list">
           <div class="head">
              <dl>
                 <dt>41人</dt>
                 <dd>2016年7月工资单</dd>
              </dl>
              <div class="icon"></div>
           </div>
           <div class="bottom">
               <ul>
                 <li><i class="icon fa fa-flag"></i>未发送</li>
                 <li><i></i>401,032.00</li>
                 <li><i></i>0人</li>
                 <li><i></i>3人</li>
                 <li><i></i>bobo</li>
                 <li><i></i>06-02 14:00</li>
               </ul>
           </div>
       </div>
        <div class="list">
          <p>创建一个新工资条</p>
       </div>
    </div>
 </div>
</template>

<script>
export default {
   name: 'PayrollManagement',
   data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        dynamicTags: ['2016年7月', '2016年6月', '2016年5月','工资'],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      //筛选
       handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3{
  font-weight: 400;
  border-bottom: 1px solid #eee;
  padding-bottom: .1rem;
}
.el-form--inline{
  margin-top: .2rem;
}
.el-tag{
  border-radius: .5rem;
  height: .4rem;
  text-align: center;
  line-height: .4rem;
  margin: 0 .1rem;
  padding: 0 .1rem;
  background: transparent;
  border: 1px solid #ccc;
  color: #000;
}
.label p{
  border: none
}
.box{
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  padding-top: .4rem;
  .list{
    width: 30%;
    margin-left: .3rem;
    margin-bottom: .3rem;
    height: 2.5rem;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 4px 4px #ccc;
    p{
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
    }
    .head{
      dl{
        display: flex;
        padding: .3rem;
        dt{
          width: .4rem;
          height: .4rem;
          display: block;
          line-height: .4rem;
          text-align: center;
          background: orange;
          border-radius: 50%;
        }
        dd{
          padding-left: .1rem;
          padding-top: .1rem;
        }
      }
    }
    .bottom{
      ul{
        display: flex;
        flex-wrap:wrap;
        padding-left:.5rem;
        li{
          width: 50%;
          padding: .1rem 0;
        }
      }
    }
  }
}
</style>
