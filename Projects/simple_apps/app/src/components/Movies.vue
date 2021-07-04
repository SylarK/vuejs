<template>
   <div class="container">
      <div class="row row-cols-4">
         <div 
            class="col"
            v-for="film in listFilms"
            :key="film.id"
         >
            <div class="card" style="width: 14rem;">
               <img :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" :alt="`film-${film.id}`" class="card-img-top">
               <div class="card-body">
                  <p class="card-text">
                     {{ film.original_title }}
                  </p>
               </div>
            </div>
         </div>
      </div>
      <div class="buttons-page">
         <button v-if="pageIndex > 1" @click="changePageDecrement" type="button" class="btn btn-light">
            <i class="fas fa-arrow-left"></i>
         </button>
         <button v-else type="button" class="btn btn-light" disabled>
            <i class="fas fa-arrow-left"></i>
         </button>
         <button @click="changePageIncrement" type="button" class="btn btn-light">
            <i class="fas fa-arrow-right"></i>
         </button>
      </div>
   </div>
</template>

<script>
import axios from 'axios'
   export default {
      data(){
         return{
            listFilms: [],
            pageIndex: 1
         }
      },
      methods:{
         async getFilms(page){
            let URL = `https://api.themoviedb.org/3/movie/popular?api_key=d7d2be27f5f48994264dd2400124a80e&language=en-US&page=${page}`;
            const response = await axios.get(URL)
               .then(res => res.data.results)
            
            this.listFilms = response;
         },
         async changePageIncrement(){
            this.pageIndex++
            let index = this.pageIndex
            await this.getFilms(index)
         },
         async changePageDecrement(){
            this.pageIndex--
            let index = this.pageIndex
            await this.getFilms(index)
         }
      },
      computed:{
         changeURLImg: function(path){
            return `https://image.tmdb.org/t/p/w500${path}`
         }
      },
      created(){
         this.getFilms(this.pageIndex);
      }
   }
</script>

<style scoped>
p{
   font-weight: bold;
}

.col{
   margin-top: 20px;
}

.buttons-page{
   margin-top: 1%;
}

</style>