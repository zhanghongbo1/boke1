import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    get(state,value){
      return state.list=value
    }
  },
  actions: {
  },
  modules: {
  }
})
