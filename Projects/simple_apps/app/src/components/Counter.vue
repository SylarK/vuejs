<template>
   <div>
      <h3>{{ getValue }}</h3>
      <button @click="setValue" name="increment" type="button" class="btn btn-success">+</button>
      <button @click="setValue" name="decrement" type="button" class="btn btn-danger">-</button>
   </div>
</template>

<script>
export default {
   data(){
      return {
         value: 0
      }
   },
   methods:{
      setValue(op){
         op.srcElement.name == 'increment' ? this.value++ : this.value--
      }
   },
   computed: {
      getValue(){
         return this.value;
      }
   }
}
</script>

<style scoped>

</style>