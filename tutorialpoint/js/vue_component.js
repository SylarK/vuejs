Vue.component('testcomponent', {
  template:
    '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
  data: function () {
    return {
      name: 'Ria',
    }
  },
  methods: {
    changename: function () {
      this.name = 'Ben'
    },
    originalname: function () {
      this.name = 'Ria'
    },
  },
})

var vm = new Vue({
  el: '#component_test',
  components: {
    testcomponent: {
      template: '<div><h3>I am different!</h3></div>',
    },
  },
})

var vm1 = new Vue({
  el: '#component_test1',
})

var vm2 = new Vue({
  el: '#component_test2',
})

var vm3 = new Vue({
  el: '#component_test3',
})

var vm4 = new Vue({
  el: '#component_test4',
})

// Dynamic Component

var vm5 = new Vue({
  el: '#databinding',
  data: {
    view: 'component1',
  },
  components: {
    component1: {
      template:
        '<div><span style = "font-size:25;color:red;">Dynamic Component</span></div>',
    },
  },
})
