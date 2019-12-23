<template>
  <div>
    <div>vuex：{{$store.state.data}}</div>
    <div>not found</div>
  </div>
</template>

<script>
  export default {
    data(){//此处data为函数，而不是对象 
      return {
        
      }
    },
    methods: {
     
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>