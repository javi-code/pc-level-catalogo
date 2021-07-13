<template>
   <div class="wrapp section">
      <LoadingVue v-if="$apollo.loading"/>
      <div v-else>
         <h1 class="color-one">Productos</h1>
         <div class="grid-productos">
            <div v-for="producto in productos" :key="producto.id" class="card item-productos">
               <router-link :to="{name:'producto', params:{id:producto.id}}">
                  <img :src="producto.imagen">
                  <p>{{producto.nombre}}</p>
                  <div class="flex-sb">
                     <b>{{producto.precio}} Bs</b>
                  </div>
               </router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import LoadingVue from '@/components/ui/Loading.vue'
import { LIST_PRODUCTOS } from '../../graphql/querys'

export default {
   name: 'listUser',
   components:{
      LoadingVue,
   },
   apollo:{
      productos:{
         query: LIST_PRODUCTOS
      }
   },
}
</script>