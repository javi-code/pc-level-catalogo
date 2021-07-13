<template>
   <div class="wrapp section">
      <LoadingVue v-if="$apollo.loading"/>
      <div v-else>
         <h1 class="color-one">Categorias</h1>
         <div class="grid-categoria">
            <div v-for="categoria in categorias" :key="categoria.id" class="card item-categoria">
               <img :src="categoria.imagen">
               <p class="text-center text-bold">{{categoria.nombre}}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import LoadingVue from '@/components/ui/Loading.vue'
import { LIST_CATEGORIAS } from '../../graphql/querys'

export default {
   name: 'listUser',
   components:{
      LoadingVue,
   },
   apollo:{
      categorias:{
         query: LIST_CATEGORIAS
      }
   },
}
</script>