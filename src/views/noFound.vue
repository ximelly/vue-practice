<template>
  <div>
    <div class="vuex">
      <h3>vuex</h3>
      <div>data:{{$store.state.data}}</div>
      <div>name:{{$store.state.name}}</div>
    </div>
    <div>not found</div>
    <el-button icon="el-icon-update" @click="update">更新vuex数据</el-button>
  </div>
</template>

<script>
  export default {
    data(){//此处data为函数，而不是对象 
      return {
        
      }
    },
    methods: {
      update() {
        //异步
        // this.$store.dispatch('setData', 'this is update data');
        // this.$store.dispatch('setName', 'dusan');

        //同步
        // this.$store.commit('SET_DATA', 'this is update data');
        // this.$store.commit('SET_NAME', 'dusan');

        //直接修改
        this.$store.state.data = 'this is update data';
        this.$store.state.name = 'dusan';

        //1）共同点： 能够修改state里的变量，并且是响应式的（能触发视图更新）
        //2）不同点：
        // 若将vue创建 store 的时候传入 strict: true, 开启严格模式，那么任何修改state的操作，只要不经过 mutation的函数，vue就会 throw error : [vuex] Do not mutate vuex store state outside mutation handlers。
        // 使用dispatch 和 commit的区别在于，前者是异步操作，后者是同步操作，所以 一般情况下，推荐直接使用commit，即 this.$store.commit(commitType, payload)，以防异步操作会带来的延迟问题
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>