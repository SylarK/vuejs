<template>
  <div id="app">
    <Home :rotas="routes" />
    <transition name="pagina">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Home from './components/Nav.vue'
import { routes } from './routes'

export default {
  components:{
    Home
  },
  name: 'app',
  data(){
    return{
      routes: routes.filter(route => !route.menu)
    }
  }
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
</style>
