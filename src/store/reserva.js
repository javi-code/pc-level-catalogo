export default {
   state: {
      reserva:[],
   },
   mutations: {
      SET_RESERVA(state, producto){
         state.reserva.push(producto)
      },
      REMOVE_RESERVA(state, index){
         state.reserva.splice(index, 1)
      },
      EMPTY_RESERVA(state){
         state.reserva = []
      }
   },
   getters:{
      GET_RESERVA: state => state.reserva,
   },
}