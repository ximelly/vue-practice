<template>
  <div>
    <div>{{page}}</div>
		<el-button icon="el-icon-refresh" @click="update">更新data</el-button>
  </div>
</template>

<script>
  export default {
    data(){//此处data为函数，而不是对象 
      return {
        page:"router"
      }
		},
		/* eslint-disable */
		//局部守卫
		beforeRouteEnter (to, from, next) {
			// 不能获取组件实例 `this`
			console.log('beforeRouteEnter')
			next();
		},
		beforeRouteUpdate (to, from, next) {
			console.log('beforeRouteUpdate')
			next();
		},
		beforeRouteLeave (to, from, next) {
			console.log('beforeRouteLeave')
			next();
		},
		//生命周期函数
		beforeCreate: function () {
			//实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
			console.log("beforeCreate")
		},
		created: function () {
			//实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
			// `this` 指向 vm 实例
			console.log("created")
		},
		beforeMount: function () {
			//在挂载开始之前被调用
			console.log("beforeMount")
		},
		mounted: function () {
			//el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
			console.log("mounted")
		},
		beforeUpdate: function () {
			console.log("beforeUpdate")
		},
		updated: function () {
			console.log("updated")
		},
		beforeDestroy: function () {
			console.log("beforeDestroy")
		},
		destroyed: function () {
			console.log("destroyed")
		},
    methods: {
			update(){
				this.page="new data";
			}
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>