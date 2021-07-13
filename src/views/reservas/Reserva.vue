<template>
   <div class="box-res" @click.stop="offList=false" :class="{'box-res-on': offList}">
      <div class="card" @click.stop>
         <div @click="offList = !offList" class="flex-sb res--preview">
            <div class="flex">
               <i  :class="{'color-one': cantidadProd}" class="icon-local-mall icon--buy"></i>
               <div> {{cantidadProd}} productos en <b>Precompras</b> </div>
            </div>
            <i :class="offList ? 'icon-arrow-down' :'icon-arrow-up'"></i>
         </div>
         <div class="box-precomp" :class="{'box-precomp-on':offList}">
            <div v-if="cantidadProd == 0" class="empty--list"> Selecciona un prodocto para reservar </div>
            <template v-else>
            <div class="list-precomp">
               <div v-for="(producto,index) in productos" :key="index" class="item-precomp-list flex">
                  <img :src="producto.imagen">
                  <div class="w">
                     <p>{{producto.nombre}}</p>
                     <h4>{{producto.precio}} Bs</h4>
                  </div>
                  <i @click="removeProdut(index)" class="icon-clear close-list"></i>
               </div>
            </div>
            <h4 class="text-end">Total:{{costoTotal}} Bs</h4>
            <EnviarReservaVue/>
            </template>
         </div>
      </div>
   </div>
</template>

<script>
import EnviarReservaVue from './EnviarReserva.vue'

export default {
   components:{
      EnviarReservaVue
   },
   data:() =>({
      offList:false
   }),
   computed:{
      productos(){
         return this.$store.getters.GET_RESERVA
      },
      cantidadProd(){
         if(this.productos){
            return this.productos.length
         }
         return 0
      },
      costoTotal(){
         if(this.productos){
            return this.productos.reduce( (a, b) => a + b.precio, 0)
         }
         return 0
      }
   },
   methods:{
      removeProdut(index){
         this.$store.commit('REMOVE_RESERVA', index)
      }
   }
}
</script>