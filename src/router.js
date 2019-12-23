import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    { path: '/form', component: () => import('./views/form.vue')},
    { path: '/list', component:  () => import('./views/toDoList.vue') },
    { path: '/lifeCycle', component:  () => import('./views/lifeCycle.vue') },
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
 //全局守卫
 router.beforeEach((to, from, next) => {
  console.log('beforeEach', to.path, from.path);
  next();
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve', to.path, from.path);
  next();
})

router.afterEach((to, from) => {
  console.log('afterEach', to.path, from.path);
})


export default router;