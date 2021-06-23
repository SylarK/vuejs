<template>
  <div id="app">
    <segunda-parte />
  </div>
</template>

<script>
import PrimeiraParte from './components/primeira-parte/PrimeiraParte.vue'
import SegundaParte from './components/segunda-parte/SegundaParte.vue'

export default {
  components:{
    'primeira-parte': PrimeiraParte,
    'segunda-parte': SegundaParte
  },
  name: 'app',
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

small{
  font-weight: bold;
  padding:4px;
  border: 2px solid rgba(0, 0, 0, 0.294);
  display: block;
  margin: 5px 0 20px 0;
}

</style>
