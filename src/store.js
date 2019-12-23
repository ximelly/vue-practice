import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      data: 'this is data',
      name:'ximelly'
    },
    mutations: {
      SET_DATA(state, data) {
        state.data = data;
      },
      SET_NAME(state, data) {
        state.name = data;
      }
    },
    actions: {
      setData({ commit }, data) {
        commit('SET_DATA', data)
      },
      setName({ commit }, data) {
        commit('SET_NAME', data)
      }
    }
})