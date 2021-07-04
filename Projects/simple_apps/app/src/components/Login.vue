<template>
   <div class="container">
      <div class="form-login">
         <form @submit.prevent="submitForm">
            <div class="mb-3">
               <label class="form-label">Email address</label>
               <input v-model="auth.username" type="text" class="form-control" aria-describedby="emailHelp">
               <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
               <label class="form-label">Password</label>
               <input v-model="auth.password" type="password" class="form-control">
            </div>
            <div class="mb-3 form-check">
               <input type="checkbox" class="form-check-input" id="exampleCheck1">
               <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
         </form>
      </div>
   </div>
</template>

<script>
import axios from 'axios'

   export default {
      data(){
         return{
            auth: { username: '', password: ''},
            users: []            
         }
      },
      methods:{
         async getInfo(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
               .then(res => res.data)
            
            this.users = response
         }
      },
      computed:{
         filterUsers(){
            this.users = this.users.filter(user => user.username === this.auth.username)
            console.log(this.users[0])
         },
         verify(){
            if(this.users[0].website == this.auth[0].pass){
               alert('Passou')
               return true
            }else{
               alert('Bloqueado')
               return false
            }
         },
         submitForm(){
            this.filterUsers
            console.log(this.users)
         }
      },
      created(){
         this.getInfo();
      }
   }
</script>

<style scoped>
label{
   font-weight: bold;
   float: left;
}

.form-login{
   border: 1px solid rgba(12, 12, 12, 0.171);
   border-radius: 5px;
   padding: 2% 25% 2% 25%;
}

</style>