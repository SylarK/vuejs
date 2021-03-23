const state = {
  notes: [],
  timestamps: [],
};
const mutations = {
  ADD_NOTE(state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESTAMP(state, payload) {
    let newTimeStamp = payload;
    state.timestamps.push(newTimeStamp);
  },
};
const actions = {
  addNote(context, payload) {
    context.commit('ADD_NOTE', payload);
  },
  addTimeStamp(context, payload) {
    context.commit('ADD_TIMESTAMP', payload);
  },
};
const getters = {
  getNotes: (state) => state.notes,
  getTimestamps: (state) => state.timestamps,
  getNoteCount: (state) => state.notes.length,
};
const store = Vuex.createStore({
  state,
  mutations,
  actions,
  getters,
});

const emitter = mitt();

const inputComponent = {
  template: `<input 
        :placeholder="placeholder" 
        v-model="input" 
        @keyup.enter="monitorEnterKey" 
        class="input is-small" type="text" />`,
  props: ['placeholder'],
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
  template: `<div class="note-count">
      Note count: <strong>{{ noteCount }}</strong>
    </div>`,
  data() {
    return {
      noteCount: 0,
    };
  },
  created() {
    emitter.on('add-note', (event) => this.noteCount++);
  },
};

const app = Vue.createApp({
  components: {
    'input-component': inputComponent,
  },
});

app.use(store);
app.mount('#app');
