<template>
   <div>
      <h3>News</h3>
      <div class="accordion" id="accordionMain">
         <div 
            class="accordion-item"
            v-for="article in listArticles"
            :key="article.id"
         >
            <h2 class="accordion-header" :id="`heading` + article.id">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse`+article.id" aria-expanded="true" aria-controls="collapseOne">
               <small>#{{ article.id }}</small>
               {{ article.title}}
               </button>
            </h2>
            <div :id="`collapse`+article.id" class="accordion-collapse collapse" :aria-labelledby="`heading`+article.id" data-bs-parent="#accordionMain">
               <div class="accordion-body">
                  {{ article.body}}
               </div>
            </div>            
         </div>       
      </div>
   </div>
</template>

<script>
import axios from 'axios'

   export default {
      data(){
         return{
            articles: []
         }
      },
      methods:{
         async getInfo(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
               .then(res => res.data)
            this.articles = response
         }
      },
      computed:{
         listArticles(){
            return this.articles
         }
      },
      created(){
        this.getInfo()
      }
   }
</script>

<style scoped>
.list-group-item p{
   float: left;
}

small{
   background-color: lightgray;
   border-radius: 5px;
   margin-right: 10px;
   text-align: center;
   font-weight: bold;
   width: 20px;
}

</style>