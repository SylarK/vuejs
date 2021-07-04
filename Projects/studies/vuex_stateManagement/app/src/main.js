import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "regenerator-runtime/runtime.js";

Vue.config.productionTip = false;

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
