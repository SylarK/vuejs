<template>
  <div id="app">
    <nav-bar></nav-bar>
    <el-row :gutter="20">
      <el-col :span="15">
        <h1>Product List</h1>
        <product-list></product-list>
      </el-col>
      <el-col :span="9">
        <h1>Shopping Cart</h1>
        <shopping-cart></shopping-cart>
        <p>
          <b>Total Cost: {{ totalCost }}</b>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Store } from './store/store';
export default {
  name: 'app',
  computed: {
    totalCost() {
      return Store.totalCost;
    },
  },
};
</script>
