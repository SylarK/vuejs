<template>
   <div class="container">
      <h3>Todo App</h3>
      
      <input required type="text" class="inputText" id="input-personal" v-model="todo">
      <button type="button" class="btn btn-sm btn-warning" @click="addItem">Add</button>

      <div v-if="listTodo.length > 0" class="scope-card">
         
         <div class="card">
         <ul class="list-group list-group-flush">
            <li 
               class="list-group-item"
               v-for="item in listTodo"
               :key='item.id'
            >               
               <i @click="deleteItem(item.id)" class="fas fa-trash-alt trash"></i>

            </li>
         </ul>
         </div>
      </div>
      <div v-else class="card scope-card">
         <div class="card-body">
            <p>You don't have any notes yet!</p>
            <img id="img-card" src="../assets/impatient.png" alt="fe">
         </div>
      </div>
   </div>
</template>

<script>
export default {
   
   data(){
      return{
         listTodo: [],
         todo: ''
      }
   },
   methods:{
      addItem(){
         
         if(this.listTodo.length > 0){
            let index = this.listTodo.length - 1
            let id = this.listTodo[index].id + 1

            this.listTodo.push({id: id, data: this.todo})
            this.todo = ''
         }else{
            this.listTodo.push({id: 1, data: this.todo})
            this.todo = ''
         }
      },
      deleteItem(id){
         this.listTodo = this.listTodo.filter(d => d.id !== id)
      }
   }
}
</script>

<style scoped>
p{
   font-weight: 700;
}

.inputText{
   width: 40%;
   margin-top: 5%;
}

.list-group{
   margin-top: 2%;
}

.scope-card{
   margin-top: 10px;
   padding: 0 20% 0 20%;
}

.trash{
   float: right;
   cursor: pointer;
   margin-left: 10px;
}

#img-card{
   width: 100px;
   height: 100px;
}

#input-personal{
   border: 1px solid rgba(80, 80, 80, 0.424);
}

#input-personal:focus{
   outline: 1px solid rgba(54, 120, 182, 0.603);
}

</style>