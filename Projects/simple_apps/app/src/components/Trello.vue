<template>
   <div class="container">
      <div class="scope-options">
         <button 
            type="button" 
            class="btn btn-success" 
            id="addCard"
            data-bs-toggle="modal"
            data-bs-target="#inputModal"
         >Add Card</button>
      </div>

      <div class="modal fade" id="inputModal" tabindex="-1" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title">Add Card</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <div class="input-group mb-3">
                     <span class="input-group-text" id="basic-addon1">Title</span>
                     <input type="text" class="form-control" aria-describedby="basic-addon1" v-model.lazy="dataTitle">
                  </div>
                  <div class="input-group mb-3">
                     <input type="text" class="form-control" aria-describedby="basic-addon1" v-model.lazy="dataInfo">
                  </div>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" @click="addCard">Add</button>
               </div>
            </div>
         </div>
      </div>

      <div v-if="pageCondition" >
         <div         
            class="row row-cols-3"
            v-for="card in listCard"
            :key="card.id"
         >
            <div class="card" style="width: 16rem">
               <p class="card-text">
                  {{ card.info }}
               </p>
            </div>
         </div>
      </div>
      <div v-else>
         <h3>Don't have any card yet!</h3>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return{
         dataTitle: '',
         dataInfo: '',
         indexList: 1,
         listCard: [],
         pageCondition: true
      }
   },
   methods:{
      addCard(){
         if(this.listCard.length > 0){
            let index = this.indexList;
            this.indexList = index + 1

            this.listCard.push({id: index, title: this.dataTitle, info: this.dataInfo})
            this.dataTitle = ''
            this.dataInfo = ''
         }else{
            this.listCard.push({id: this.indexList, title: this.dataTitle, info: this.dataInfo})
            this.dataTitle = ''
            this.dataInfo = ''
         }
      },
      deleteItem(id){
         this.listCard = this.listCard.filter(d => d.id !== id)
      }
   }
}
</script>

<style scoped>
#addCard{
   float: right;
}
</style>