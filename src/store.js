import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      data: 'this is data'
    },
    mutations: {
      SET_DATA(state, data) {
        state.data = data
      }
    },
    actions: {
      setData({ commit }, data) {
        commit('SET_DATA', data)
      }
    }
})