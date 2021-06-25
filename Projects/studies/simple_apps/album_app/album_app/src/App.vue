<template>
  <div id="app">
    <input type="text" v-model.lazy="inputBox">   
    <input type="number" v-model="perPage" id="inputNumber" min="1" max="15" value="5">
    <p></p>
    <button @click.prevent="getPhoto">Generate</button>
    <ul>
      <li v-for="image in list_images" :key='image.id'>
        <imagem-card :url="image.src.portrait" :photographer="image.photographer" :link="image.src.original" />
      </li>
    </ul>
    
  </div>
</template>

<script>
import Imagem from './models/imagem/Imagem.vue'

export default {
  components: {
    'imagem-card': Imagem
  },
  name: 'app',
  data () {
    return {
      list_images: '',
      inputBox: '',
      perPage: ''
    }
  },

  methods:{
    getPhoto(){
      try{
        const baseURI = 'https://api.pexels.com/v1/search';
        const config = {
          params: {query: this.inputBox, per_page: this.perPage},
          headers: {Authorization: '563492ad6f91700001000001ea6d43c155ad44acaea196e048a09a44'}
          }
        this.$http
          .get(baseURI, config)
          .then((res) => {
            this.list_images = res.data.photos
          })
          console.log(this.list_images)
      }catch(e){
        console.log(e);
      }
    },
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
button{
  padding: 7px 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
}

#inputNumber{
  width: 40px;
  padding: 1px 5px;
}
</style>

