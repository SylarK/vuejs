<template>
     <ul class="nav nav-tabs">
      <li 
        class="nav-item"
        v-for="rota in rotas"
        :key="rota.id"
      >
        <router-link class="nav-link" :to="rota.path ? rota.path : '/'">
          {{ rota.titulo }}
        </router-link>
      </li>
    </ul>
</template>

<script>
   export default {
      props:{
        rotas:{
          type: Array,
          required: true
        }
      }
   }
</script>

<style scoped>
.nav{
   margin-bottom: 5%;
}
</style>