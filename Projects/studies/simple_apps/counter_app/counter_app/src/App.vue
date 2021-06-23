<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ number }}</h2>

    <a class="button" @click.prevent="increment">Increment</a>
    <a class="button" @click.prevent="decrement">Decrement</a>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Counter',
      number: 0
    }
  },
  methods:{
    increment(){
      this.number++;
    },
    decrement(){
      this.number--;
    }
  }
}
</script>

<style>
*{
  background-color: rgb(72, 84, 95);
  text-align: center;
}

h1{
  text-align: center;
}

h2{
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
}

.button{
  border: 1px solid black;
  padding: 3px 5px;
  margin: 0px 10px 0 10px;
  font-size: 15px;
  cursor: pointer;
  transition: .3s;
  border-radius: 5px;
}

.button:hover{
  padding: 4px 6px;
  font-size: 18px;
  transition: .3s;
}
</style>
