<template>
  <div>
    <h1 class="title">All Products</h1>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>
            <button @click="addToCart(product)" class="button is-info">
              Add to cart
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: mapGetters({
    products: 'allProducts',
    length: 'getNumbersOfProducts',
  }),
  methods: mapActions(['addToCart']),
};
</script>
