import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import router from './router.js'
import "./styles/common.css";
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  strict: true,
  render: h => h(App),
  store,
  router
}).$mount('#app')
