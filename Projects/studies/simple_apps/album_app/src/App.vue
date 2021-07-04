<template>
  <div id="app">
    <h1>Album</h1>
    <card-photo />
  </div>
</template>

<script>
import Card from './components/card/Card.vue'

export default {
  components:{
    'card-photo':Card
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
</style>
