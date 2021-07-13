<template>
   <div class="wrapp">
      <div class="section">
         <div class="grid-6-6">
            <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120703.33515346133!2d-65.32983265807611!3d-19.020637159608548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc8bc8187832f%3A0xbd9df259af1bee96!2sSucre!5e0!3m2!1ses!2sbo!4v1626209896760!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
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