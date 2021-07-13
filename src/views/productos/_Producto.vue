<template>
  <div class="wrapp">
     <div class="section">
        <LoadingVue v-if="$apollo.loading"/>
        <div v-else class="grid-6-6">
           <div class="box-img-producto">
              <img :src="producto.imagen">
           </div>
           <div>
              <h1 class="color-one">{{producto.nombre}}</h1>
              <p>{{producto.descripcion}}</p>
              <p class="h1 text-bold">{{producto.precio}} Bs</p>
              <ul class="list--caracts">
                 <li v-for="(car,index) in producto.caracteristicas" :key="index">
                    {{car}}
                 </li>
              </ul>
              <BotonVue @click.native="setReserva(producto)" name="Reservar" class="btn btn-success m-t3"/>
           </div>
        </div>
     </div>
  </div>
</template>

<script>
import BotonVue from '../../components/ui/Boton.vue'
import LoadingVue from '../../components/ui/Loading.vue'
import { PRODUCTO } from '../../graphql/querys'

export default {
   components:{
      LoadingVue,
      BotonVue
   },
   apollo:{
      producto:{
         query:PRODUCTO,
         variables(){
            return{
               id: parseInt( this.$route.params.id )
            }
         }
      }
   },
   methods:{
      setReserva(producto){
         this.$store.commit('SET_RESERVA', producto)
      }
   }
}
</script>