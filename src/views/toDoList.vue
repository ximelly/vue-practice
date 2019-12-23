<template>
  <div>
    <div>vuex：{{$store.state.data}}</div>
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
  </div>
</template>

<script>
  import todoitem from '../components/list-item.vue'

  export default {
    components:{//要使用的子组件
      "list-item":todoitem
    },
    data:function(){
      return {
        list:[],
        input_message:"",
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
      }
    },
  }
</script>
<style scoped>

</style>
