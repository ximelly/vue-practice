import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    { path: '/form', component: () => import('./views/form.vue'),meta:{title:'form'}},
    { path: '/list', component:  () => import('./views/toDoList.vue'),meta:{title:'list'}},
    { path: '/lifeCycle', component:  () => import('./views/lifeCycle.vue'),meta:{title:'lifeCycle'}},
    { path: '/addRouters', component:  () => import('./views/addRouters.vue'),meta:{title:'addRouters'}},
    {
        path: '/nofound',
        name: 'nofound',
        component: () => import('./views/noFound.vue')
      },
    {
        path: "*",
        redirect: function(){
           return '/nofound'
        } //全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
      }
]
const router = new Router({
    routes
})

/* eslint-disable */
//修改title方法二：
// Vue.mixin({
//   beforeCreate(){
//     //this.$route :当前路由  this.$router :整个路由对象
//     if(this.$route.meta.title){
//       document.title=this.$route.meta.title;
//     }else{
//       document.title="vue-practice";
//     }
//   }
// })

 //全局守卫
 router.beforeEach((to, from, next) => {
  console.log('全局守卫：beforeEach', to.path, from.path);
  //修改title方法二：
  if(to.meta.title){
    document.title=to.meta.title;
  }else{
    document.title="vue-practice";
  }
  next();
})

router.beforeResolve((to, from, next) => {
  console.log('全局守卫：beforeResolve', to.path, from.path);
  next();
})

router.afterEach((to, from) => {
  console.log('全局守卫：afterEach', to.path, from.path);
})


export default router;