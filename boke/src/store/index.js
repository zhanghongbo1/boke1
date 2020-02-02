import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    arr:[]
  },
  mutations: {
    get(state,value){
      return state.list=value
    }
  },
  actions: {
   async  getarr({commit,state},val){
       const  res= await axios.get(" http://localhost:3000/arr",{params:{name:val}}).then(res=>{})
   }
  },
  modules: {
  }
})
