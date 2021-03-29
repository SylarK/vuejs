const ButtonRow = {
  template: `
    <div>
      <button @click="onHoodieClick" class="ui button">Hoddie</button>
      <button @click="onTeeClick" class="ui button">Tee</button>
      <button @click="onFittedCapClick" class="ui button">Fitted Cap</button>
      <button @click="onJacketClick" class="ui button">Jacket</button>
    </div>
  `,
};

Vue.createApp({
  components: {
    'button-row': ButtonRow,
  },
}).mount('#app');
