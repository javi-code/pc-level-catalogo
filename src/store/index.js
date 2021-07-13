import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// import notify from './notify'
import reserva from './reserva'

export default new Vuex.Store({
   state: {
      modal:false,
   },
   mutations: {
      SET_STATE_MODAL(state){
         state.modal = !state.modal
      },
   },
   getters:{
      GET_STATE_MODAL: state => state.modal,
   },
   modules: {
      reserva
   }
})
