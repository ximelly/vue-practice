import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    { path: '/form', component: () => import('./views/form.vue')},
    { path: '/list', component:  () => import('./views/toDoList.vue') },
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
export default router;