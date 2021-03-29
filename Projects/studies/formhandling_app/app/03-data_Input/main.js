const InputForm = {
  template: `
    <div class="input-form">
      <form @submit="submitForm" class="ui form">
        <div class="field">
          <!--<input ref="newItem" type="text" placeholder="Add an item!" />-->
          <input v-model="newItem" type="text" placeholder="Add an item!" />
        </div>
        <button class="ui button">Submit</button>
      </form>
      <div class="ui segment">
        <h4 class="ui header">Notes</h4>
        <ul>
          <li v-for="item in items" class="item"> {{ item }}</li>

        </ul>
      </div>
    </div>
  `,
  data() {
    return {
      newItem: '',
      items: [],
    };
  },
  methods: {
    submitForm(evt) {
      evt.preventDefault();
      //We use preventDefault() with the @submit handler to prevent the browser’s default action
      //of submitting the form.
      //  console.log(this.$refs.newItem.value);
      this.items.push(this.newItem);
      this.newItem = '';
    },
  },
};

Vue.createApp({
  components: {
    'input-form': InputForm,
  },
}).mount('#app');
