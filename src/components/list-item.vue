<template>
  <div class="m10"><el-tag closable type="success" @close="clickItem()">{{name}}</el-tag></div>
</template>

<script>
  export default {
    name:"list-item",
    props:["name","index"],//定义子组件接收父组件传来的属性
    data(){//此处data为函数，而不是对象
      return{};
    },
    methods: {
      clickItem(){
        this.$emit("delItem",this.index);//出发delItem，通知父组件，bind传递参数
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m10{
    margin:10px 0;
  }
</style>
