import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import modules from './store.config'
Vue.use(Vuex);
console.log(modules);
const store = new Vuex.Store({
  actions,
  mutations,
  getters,
  ...modules
})
export default store