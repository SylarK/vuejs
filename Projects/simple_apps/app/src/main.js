import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store'
import "regenerator-runtime/runtime.js";

Vue.config.productionTip = false;
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
