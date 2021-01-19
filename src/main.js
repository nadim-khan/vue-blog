import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue';
import VueRouter from 'vue-router'

import Home from './components/Home';
import Users from './components/Users';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path:'/',component :Home },
  { path:'/home',component :Home },
  { path:'/users',component :Users },
];

const router = new VueRouter(
  {
    routes
  }
)

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
