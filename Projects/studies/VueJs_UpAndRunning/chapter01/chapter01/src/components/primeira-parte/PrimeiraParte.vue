<template>
    <div>
        <p v-if="hours < 12">Good Morning !</p>
    <p v-if="hours >= 12 && hours < 18">Good Afternoon !</p>
    <p v-if="hours >= 18">Good Night !</p>
    <p>Hello, {{ msg }}</p>
    
    <hr>
    <br>
    <p v-if="path === '/'">You are on the home page!</p>
    <p v-else>You're on {{ path }}. Click <a href="/">here</a> to retun to home page.</p>
    <br>

    <hr>
    <br>
    <p>One element of array: {{ animals[3]}}</p>
    <p>All: {{ animals }}</p>
    <br>

    <hr>
    <br>
    <ul>
      <li v-for="animal in animals" :key="animal">
        {{ animal }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, name) in employees" :key="name">
        User: {{ name }} || R$ {{ value }}
      </li>
    </ul>
    <br>

    <hr>
    <br>
      <button :disabled="buttonDisabled">Test Button</button>
    <br>

    <hr>
    <br>
      <p>{{ seconds }} seconds have elapsed since you opened the page.</p>
    <br>

    <hr>
    <br>
      <input type="text" v-model="inputText">
      <p>inputText: {{ inputText }} </p>
    <br>
    <label><input type="radio" v-model="valueRadio" value="one">One</label>
    <label><input type="radio" v-model="valueRadio" value="two">Two</label>
    <label><input type="radio" v-model="valueRadio" value="three">Three</label>
    <p>The value is {{ valueRadio }}</p>

    </div>
</template>

<script>
export default {
    data(){
    return {
      hours: new Date().getHours(),
      msg: "World!",
      path: location.pathname,
      animals: ['dog', 'cat', 'mouse', 'elephant'],
      employees: {julio: 1800.80, pascal: 1900.50, kelvin: 2100.90},
      buttonDisabled: true,
      seconds: 0,
      inputText: '',
      valueRadio: ''
    }
  },
  created(){
    // setInterval(() => {
    //   this.seconds++;
    // }, 1000);
  }
}
</script>

<style>

</style>