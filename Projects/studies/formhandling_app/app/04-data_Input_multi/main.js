const InputForm = {
  template: `
    <div class="input-form">
      <form @submit="submitForm" class="ui form">
        <div class="field">
          <label>New note</label>
          <!--<input ref="newItem" type="text" placeholder="Add an item!" />-->
          <input v-model="fields.newItem" type="text" placeholder="Add an item!" />
        </div>
        <div class="field">
          <label>Email</label>
          <input
            v-model="fields.email"
            type="text"
            placeholder="What's your email?"
          />
        </div>
        <div class="field">
          <label>Urgency</label>
          <select v-model="fields.urgency" class="ui fluid search dropdown">
            <option disabled value="">Please select one</option>
            <option>Nonessential</option>
            <option>Moderate</option>
            <option>Urgent</option>
          </select>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input v-model="fields.termsAddConditions" type="checkbox" />
            <label> I accept the terms and conditions </label>
          </div>
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
      fields: {
        newItem: '',
        email: '',
        urgency: '',
        termsAddConditions: false,
      },
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
