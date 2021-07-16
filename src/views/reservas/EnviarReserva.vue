<template>
<div>
   <div v-if="smsSend" class="empty--list">{{smsSend}}</div>
   <div v-else class="form-reserva">
      <p>Ingresa tus datos para realizar una reserva</p>
      <form @submit.prevent="sendData">
        <div class="item-input">
            <label>Nombre</label>
            <input type="text" v-model="cliente" required>
         </div>
         <div class="item-input">
            <label>WhatsApp</label>
            <input type="number" v-model="cliente_whatsapp" required>
         </div>
         <div class="item-input">
            <BotonVue type="submit" 
               :name="sending ? 'Reservando...  ':'Finalizar reserva'" class="btn-success"/>
         </div>
      </form>
   </div>
</div>
</template>

<script>
import BotonVue from '../../components/ui/Boton.vue'
import {REG_VENTA} from '@/graphql/mutations'
import {currentDate, currentDateHour} from '@/shared/utils'
export default {
   components:{
      BotonVue
   },
   data:() =>({
      sending:false,
      cliente:null,
      cliente_whatsapp:null,
      smsSend: null
   }),
   computed:{
      ventas(){
         let productos = this.$store.getters.GET_RESERVA
         let data = []
         productos.forEach(el => {
            data.push({
               cantidad: 1,
               producto_id: el.id,
               monto: parseFloat( el.precio ),
               fecha: currentDate(),
               fecha_hora: currentDateHour(),
               precompra:true,
               cliente:this.cliente,
               cliente_whatsapp: parseInt( this.cliente_whatsapp ),
            })
         });
         return data
      }
   },
   methods:{
      sendData(){
         this.sending=true
         this.$apollo.mutate({
            mutation: REG_VENTA,
            variables: {
               objects:this.ventas
            },
         }).then(res => {
            let data = res.data.insert_pc_ventas
            if(data && data.returning.length > 0){
               this.emptyForm()
            }
            this.sending =false
         })
      },
      emptyForm(){
         this.cliente_whatsapp = this.cliente = null
         this.smsSend = `Gracias por la reserva...
             La reserva solo tiene una vigencia de 24 HORAS`
         setTimeout(() => {
            this.smsSend = null
            this.$store.commit('EMPTY_RESERVA');
         }, 5000);
      }
      // 
   }
}
</script>