<template>
  <div>
    <div>vuex：{{$store.state.data}}</div>
    <!-- 
      label-width:label的宽度
      label-position label展示的位置  top||left
      inline:el-form-item作为行内元素，多个展示在一行
      rules:表单校验规则  prop属性进行绑定
      validate-om-rule-change  当rules改变时是否立即做校验，默认为true
      status-icon 校验结果对应图标
      label-suffix label的后缀
      hide-required-asterisk  是否隐藏required图标
      disabled 禁用所有表单
      size 表单大小
      实现原理：属性通过provide inject传给input组件进行处理
    -->
    <el-form ref="form" 
      :model="form" 
      label-width="100px"
      label-position="top"
      label-suffix=":"
      :rules="rules"
      :validate-on-rule-change="false"
      status-icon
      :disabled="false"
      size="small"
      :hide-required-asterisk="false">
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
        <el-button data-status="1" type="danger" @click="editStatus('error')">校验失败</el-button>
        <el-button data-status="2" type="success" @click="editStatus('success')">校验成功</el-button>
        <el-button data-status="3" type="warning" @click="editStatus('validating')">校验中</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name:"from",
    data(){//此处data为函数，而不是对象
      const userValidator=(rule,value,callBack)=>{
        //callBack如果没有参数可传undefined
        callBack(value.length>10?new Error("活动名称不能超过10个字"):undefined);
      }
      return {
        status:"",
        error:"",
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
        if(type=="error"){
          this.error="自定义错误";
        }else{
          this.error="";
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>