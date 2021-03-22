<template>
  <div>
    <input type="number" v-model="newNumber" />
    <button @click="pushnewNumber(newNumber)">Add new number</button>
  </div>
</template>
<script>
import { store } from "store.js";

export default {
  name: "NumberSubmit",
  data() {
    return {
      newNumber: 0,
    };
  },
  methods: {
    pushNewNumber(newNumber) {
      store.pushNewNumber(newNumber);
    },
  },
};
</script>