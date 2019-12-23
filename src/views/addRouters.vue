<template>
  <div>
    <el-button icon="el-icon-add" @click="addRoutes">add Routers</el-button>
  </div>
</template>

<script>
export default {
  data() {
    //此处data为函数，而不是对象
    return {};
  },
  methods: {
    addRoutes() {
      this.$router.addRoutes([{
        path: "/add",
        component: () => import("./add.vue"),
        meta: { title: "addRoutes" }
      }]);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
