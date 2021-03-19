<template>
  <div class="home">
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
      ></ProductSummaryCard>
    </div>
  </div>
</template>

<script>
//importing
import items from '../data/items';
import ProductSummaryCard from '../components/products/ProductsSummaryCard.vue';

export default {
  name: 'Home',
  components: {
    ProductSummaryCard,
  },
  data() {
    return {
      items: items,
    };
  },
};
</script>
<style lang="scss">
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
