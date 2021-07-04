<template>
   <div class="container">
      <input required type="text" class="inputText" id="input-personal" v-model="todo">
      <button type="button" class="btn btn-sm btn-warning" @click="addItem">Add</button>

      <div class="row row-cols-3">
         <div 
            class="card" style="width: 16rem;"
            v-for="item in listTodo"
            :key='item.id'
         >
               <div class="card-body">
                  <p class="card-text">
                     {{ item.data }}
                  </p>
               </div>
               <div
                  class="drop"
                  :class="getClasses"
                  @dragover.prevent="dragOver"
                  @dragleave.prevent="dragLeave"
                  @drop.prevent="drop($event)"
               >
                     <img :src="imageSource" v-if="imageSource" class="card-img-top" />
                     <h1 v-if="!imageSource && !isDragging && !wrongFile">Drop Image</h1>
               </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      data(){
         return{
            isDragging: false,
            wrongFile: false,
            imageSource: null,
            listTodo: [],
            todo: ''
         }
      },
      computed:{
         getClasses(){
            return{ isDragging: this.isDragging }
         }
      },
      methods:{
         addItem(){
            if(this.listTodo.length > 0){
               let index = this.listTodo.length - 1
               let id = this.listTodo[index].id + 1

               this.listTodo.push({ id: id, data: this.todo})
               this.todo = ''
            }else{
               this.listTodo.push({id: 1, data: this.todo})
               this.todo = ''
            }
         },
         deleteItem(id){
            this.listTodo = this.listTodo.filter(d => d.id !== id)
         },
         dragOver(){
            this.isDragging = true
         },
         dragLeave(){
            this.isDragging = false
         },
         drop(e){
            let files = e.dataTransfer.files
            this.wrongFile = false

            if (files.length === 1) {
               let file = files[0]
               if (file.type.indexOf('image/') >= 0) {
                  var reader = new FileReader()
                  reader.onload = f => {
                     this.imageSource = f.target.result
                     this.isDragging = false
                  }
                  console.log(e)
                  
                  reader.readAsDataURL(file)
               }else{
                  this.wrongFile = true
                  this.imageSource = null
                  this.isDragging = false
               }
            }
         },
      }
   }
</script>

<style scoped>
.inputText{
   width: 40%;
   margin-top: 5%;
   margin-bottom: 1%;
}

.card{
   margin-left: 10px;
   margin-top: 10px;
}

.drop{
   /* width: 100%; */
   min-height: 160px;
   background-color: rgba(195, 195, 195, 0);
   border: 1px dashed rgba(0, 0, 0, 0.349);
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   transition: background-color .2s ease-in-out;
}

.isDragging{
   background-color: #999;
   border-color: #fff;
}

.list-group{
   margin-top: 2%;
}

.trash{
   float: right;
   cursor: pointer;
   margin-left: 10px;
}

h1{
   font-size: 26px;
}

img{
   width: 100%;
   height: 100%;
   object-fit: contain;
}
</style>