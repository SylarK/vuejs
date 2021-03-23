const emitter = mitt();

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
      emitter.emit('add-note', {
        note: this.input,
        timestamp: new Date().toLocaleString(),
      });
      this.input = '';
    },
  },
};

const noteCountComponent = {
  template: `
      <div class="note-count">
        Note count: <strong>{{ noteCount }}</strong>
      </div>
      `,
  data() {
    return {
      noteCount: 0,
    };
  },
  created() {
    emitter.on('add-note', (event) => this.noteCount++);
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
    'note-cout-component': noteCountComponent,
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    },
  },
  created() {
    emitter.on('add-note', (event) => this.addNote(event));
  },
};

Vue.createApp(app).mount('#app');
