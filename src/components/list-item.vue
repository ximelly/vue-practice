<template>
  <div class="item" v-on:click="clickItem">{{name}}</div>
</template>

<script>
  export default {
    name:"list-item",
    props:["name","index"],
    data(){
      return{};
    },
    methods: {
      clickItem(){
        this.$emit("delItem",this.index);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item{
    color:#ff0000;
  }
</style>
