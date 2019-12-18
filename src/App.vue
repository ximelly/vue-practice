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
      -->
      <el-form ref="form" :model="form" label-width="100px" :rules="rules">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
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
      return {
        list:[],
        input_message:"",
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules:{
          name:[
            {required:true, trigger: 'change', message: '请输入活动名称'}
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
        console.log(this.form);
      }
    },
  }
</script>
<style>

</style>
