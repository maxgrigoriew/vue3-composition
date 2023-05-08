import { createStore } from 'vuex'


export const store = createStore({
  state () {
    return {
      count: 10
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

