const state = {
   value: 0
}

const getters = {
   getValue: (state) => state.value
}

const actions = {}

const mutations = {
   setValue: (state, op) => {
      op.srcElement.name == 'increment' ? state.value++ : state.value-- 
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}

