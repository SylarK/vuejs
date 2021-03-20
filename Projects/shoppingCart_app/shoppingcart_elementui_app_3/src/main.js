import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';

//Components
import NavBar from './components/Navbar.vue';
import ProductList from './components/ProductList.vue';

Vue.component('NavBar', NavBar);

Vue.use(Element, { locale });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
