<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>
