<template>
  <div>
    <p>Hello World</p>
    <p>Store state : {{ storeState.numbers }}</p>
  </div>
</template>
<script>
import { store } from "../store/store";

export default {
  name: "NumberDisplay",
  data() {
    return {
      storeState: store.state,
    };
  },
};
</script>