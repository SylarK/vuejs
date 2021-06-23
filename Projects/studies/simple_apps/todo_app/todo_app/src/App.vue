<template>
  <div id="app">
    <input type="text" class="input-task" name="input-task">
    <a class="button" @click.prevent="incluirTarefa">Add</a>
    <a class="button clear-all" @click.prevent="limpar">Clear</a>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{task.data}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nextNumber: 0,
      tasks: []
    }
  },
  methods: {
    incluirTarefa(){
      let valueBox = document.querySelector('.input-task').value;
      let index = this.nextNumber;
      this.nextNumber++;
      this.tasks.push({id: index, data: valueBox});
      document.querySelector('.input-task').value = '';
    },
    limpar(){
      if(confirm('Você tem certeza que deseja apagar todas as informações da lista? ')){
        this.tasks = [];
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul li{
  text-align: initial;
}

.button{
  border: 1px solid black;
  padding: 3px 9px;
  margin: 0px 2px 0 5px;
  font-size: 10px;
  cursor: pointer;
  transition: .3s;
  border-radius: 5px;
  color: white;
  background: lightslategray;
}
</style>
