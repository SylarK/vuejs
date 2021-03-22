const inputComponent = {
  template: `
      <input 
        class="input is-small" 
        :placeholder="placeholder" 
        type="text" 
        v-model="input"
        @keyup.enter="monitorEnterKey"
      />`,
  props: ['placeholder'],
  emits: ['add-note'],
  data() {
    return {
      input: '',
    };
  },
  methods: {
    monitorEnterKey() {
      this.$emit('add-note', {
        note: this.input,
        timestamp: new Date().toLocaleString(),
      });
      this.input = '';
    },
  },
};

const app = {
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: 'Enter a note',
    };
  },
  components: {
    'input-component': inputComponent,
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    },
  },
};

Vue.createApp(app).mount('#app');
