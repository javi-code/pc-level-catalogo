<template>
   <div class="wrapp">
      <div class="section">
         <div class="grid-6-6">
            <div>mapa</div>
            <div class="card">
               <form @submit.prevent="sendData">
                  <h4 class="text-center">Envianos tus dudas o consultas</h4>
                  <div class="item-input">
                     <label>Nombre</label>
                     <input type="text" v-model="nombre" required>
                  </div>
                  <div class="item-input">
                     <label>WhatsApp</label>
                     <input type="number" v-model="whatsapp" required>
                  </div>
                  <div class="item-input">
                     <label>Mensaje</label>
                     <textarea v-model="mensaje"></textarea>
                  </div>
                  <div class="item-input">
                     <BotonVue type="submit" 
                        :name="sending ? 'Enviando...  ':'Enviar consulta'" class="btn-success"/>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import BotonVue from '../../components/ui/Boton.vue'
import {REG_CONSULTA} from '@/graphql/mutations'
export default {
   name:'ConsultasP',
   components:{
      BotonVue
   },
   data:()=>({
      sending:false,
      mensaje: null,
      nombre: null,
      whatsapp: null
   }),
   methods:{
      sendData(){
         this.sending=true
         this.$apollo.mutate({
            mutation: REG_CONSULTA,
            variables: {
               mensaje: this.mensaje,
               nombre: this.nombre,
               whatsapp: this.whatsapp
            },
         }).then(res => {
            let data = res.data.insert_pc_consultas_one
            if(data.id){
               this.mensaje = null
               this.nombre = null
               this.whatsapp = null
            }
            this.sending =false
         })
      }
   }
}
</script>