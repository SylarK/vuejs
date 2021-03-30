import { createRouter, createWebHistory } from 'vue-router';

//import the components that need to be mapped
import CartList from '../components/cart/CartList.vue';
import ProductList from '../components/product/ProductList.vue';
import NotFound from '../components/NotFound.vue';
import ProductItem from '../components/product/ProductItem.vue';

const router = createRouter({
  history: createWebHistory(),
  //mapping the url path /products to the ProductList component
  //and /cart to the CartList component
  routes: [
    {
      path: '/products',
      component: ProductList,
    },
    {
      path: '/cart',
      component: CartList,
    },
    {
      path: '/',
      redirect: '/products',
    },
    {
      path: '/products/:id',
      component: ProductItem,
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
});

export default router;
