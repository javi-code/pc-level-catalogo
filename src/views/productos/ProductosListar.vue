<template>
   <div class="wrapp section" id="productos">
      <LoadingVue v-if="$apollo.loading"/>
      <div v-else>
         <h1 class="color-one">Productos</h1>
         <div v-if="productos == ''">No hay productos disponibles</div>
         <div v-else class="grid-productos">
            <router-link v-for="producto in productos" :to="{name:'producto', params:{id:producto.id}}" :key="producto.id" class="card item-productos">
               <img :src="producto.imagen">
               <p>{{producto.nombre}}</p>
               <div class="flex-sb">
                  <b>{{producto.precio}} Bs</b>
               </div>
            </router-link>
         </div>
      </div>
   </div>
</template>

<script>
import LoadingVue from '@/components/ui/Loading.vue'
import { LIST_PRODUCTOS, LIST_PRODUCTOS_BY } from '../../graphql/querys'

export default {
   name: 'listUser',
   components:{
      LoadingVue,
   },
   computed:{
      productos(){
         if( parseInt(this.$route.query.idC) ){
            return this.pc_productos
         }else{
            return this.allProducts
         }
      }
   },
   apollo:{
      allProducts:{
         query: LIST_PRODUCTOS
      },
      // 
      pc_productos:{
         query: LIST_PRODUCTOS_BY,
         variables(){
            return{
               _eq: parseInt(this.$route.query.idC)
            }
         },
         skip(){
            return !parseInt(this.$route.query.idC)
         }
      }
   },
}
</script>