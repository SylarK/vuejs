import { createStore } from 'vuex';

//modules
import productModule from './modules/product/index.js';
import cartModule from './modules/cart/index.js';

export default createStore({
  modules: {
    productModule,
    cartModule,
  },
});
