<template>
   <div>
      <div class="input-group input-group-sm mb-3">
         <span class="input-group-text" id="inputGroup-sizing-sm">Filter</span>
         <input type="search" class="form-control filtro" 
            v-model.lazy="filtro"
            @input="filtro = $event.target.value"
         >
      </div>
      <table class="table">
      <thead>
         <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th scope="col"></th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="info in getInfo" :key="info.id">
            <th scope="row">{{ info.id }}</th>
            <td>{{ info.name }}</td>
            <td>{{ info.email }}</td>
            <td>{{ info.website }}</td>
            <td>               
               <i @click="deleteItem(info.id)" class="fas fa-trash-alt trash"></i>
            </td>
         </tr>
      </tbody>
   </table> 
   </div>
</template>

<script>
import axios from 'axios'

   export default {
      data(){
         return{
            data: [],
            filtro: ''
         }
      },
      methods:{
         async searchInfo(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
            
            this.data = response;
         },
         filterData(){
            
            let exp = new RegExp(this.filtro.trim(), 'i');
            return this.data.filter(info => exp.test(info.name))
         },
         deleteItem(id){
            this.data = this.data.filter(d => d.id !== id)
         }
      },
      computed:{
         getInfo(){
            if(this.filtro){               
               return this.filterData()
            }else{
               return this.data
            }
            
         }
      },
      created(){
         this.searchInfo()
      }
   }
</script>

<style scoped>
.trash{
   color: rgb(27, 26, 26);
   cursor: pointer;
}
</style>