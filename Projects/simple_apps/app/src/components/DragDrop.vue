<template>
   <div class="container">
      <div
       class="drop"
       :class="getClasses"
       @dragover.prevent="dragOver"
       @dragleave.prevent="dragLeave"
       @drop.prevent="drop($event)"
      >
         <img :src="imageSource" v-if="imageSource" />
         <h1 v-if="wrongFile">Wrong Type</h1>
         <h1 v-if="!imageSource && !isDragging && !wrongFile">Drop and Drag</h1>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'DragDrop',
      data(){
         return{
            isDragging: false,
            wrongFile: false,
            imageSource: null
         }
      },
      computed:{
         getClasses(){
            return{ isDragging: this.isDragging }
         }
      },
      methods:{
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
.drop{
   width: 100%;
   min-height: 50vh;
   background-color: rgba(195, 195, 195, 0.705);
   border: 1px solid rgba(0, 0, 0, 0.281);
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

img{
   width: 100%;
   height: 100%;
   object-fit: contain;
}
</style>