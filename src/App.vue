<template>
  <div id="app">
    <el-input type="text" v-model="input_message">
      <el-button slot="append" icon="el-icon-plus" @click="handerAdd"></el-button>
    </el-input>
    <list-item 
          v-for="(item,index) in list" 
          v-bind:key="index" 
          :name="item" 
          :index="index" 
          v-on:delItem="handlerDel"><!-- 监听子组件出发的delItem事件 -->
      </list-item>
      
      <!-- 
        label-width:label的宽度
        inline:el-form-item作为行内元素，多个展示在一行
        rules:表单校验规则  prop属性进行绑定
        validate-om-rule-change  当rules改变时是否立即做校验，默认为true
        status-icon 校验结果对应图标
      -->
      <el-form ref="form" 
        :model="form" 
        label-width="100px"
        :rules="rules"
        :validate-on-rule-change="false"
        status-icon>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名地点" prop="des">
          <el-input v-model="form.des"></el-input>
        </el-form-item>
        <!-- 
          绑定自定义校验规则  :validate-status="status" :error="error"
          validate-status
            success 验证成功
            error 验证失败
            validating 验证中
          error 自定义错误提示
         -->
        <el-form-item label="自定义错误" prop="age" :validate-status="status" :error="error">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button type="primary" @click="addRule">添加校验规则</el-button>
          <el-button data-status="1" type="danger" @click="editStatus('error')">自定义错误error</el-button>
          <el-button data-status="2" type="success" @click="editStatus('success')">自定义错误success</el-button>
          <el-button data-status="3" type="warning" @click="editStatus('validating')">自定义错误validating</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  import todoitem from './components/list-item.vue'

  export default {
    name: 'app',
    components:{//要使用的子组件
      "list-item":todoitem
    },
    data:function(){
      const userValidator=(rule,value,callBack)=>{
        //callBack如果没有参数可传undefined
        callBack(value.length>10?new Error("活动名称不能超过10个字"):undefined);
      }
      return {
        list:[],
        input_message:"",
        status:"error",
        error:"自定义错误",
        form: {
          name: '',
          des: '',
          age:""
        },
        rules:{
          name:[
            {required:true, trigger: 'change', message: '请输入活动名称'},
            {validator:userValidator, trigger: 'change'}
          ],
          des:[
            {required:true, trigger: 'change', message: '请输入活动地址'},
          ]
        }
      }
    },
    methods: {
      handerAdd(){
        this.list.push(this.input_message);
        this.input_message="";
        this.$message.success("添加成功");
      },
      handlerDel(index){
        this.list.splice(index,1);
        this.$message.success("删除成功");
      },
      /* eslint-disable */
      onSubmit() {
        this.$refs.form.validate((isValid,errors)=>{
          console.log(isValid,errors);
        })
      },
      addRule(){
        const userValidator=(rule,value,callBack)=>{
          //callBack如果没有参数可传undefined
          callBack(value.length>10?new Error("活动地址不能超过10个字"):undefined);
        }
        let desRules=[
          ...this.rules.des,
          {validator:userValidator, trigger: 'change'}
        ]
        this.rules=Object.assign({},this.rules,{des:desRules});
        console.log(this.rules);
      },
      editStatus(type){
        this.status=type;
      }
    },
  }
</script>
<style>

</style>
