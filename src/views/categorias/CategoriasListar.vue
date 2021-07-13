<template>
   <div class="wrapp section">
      <div>
         <h1 class="color-one">Categorias</h1>
         <LoadingVue v-if="$apollo.loading"/>
         <div v-else class="grid-categoria">
            <router-link v-for="categoria in categorias"  :to="{name:'productos', query:{idC:categoria.id}}" :key="categoria.id" class="card item-categoria">
               <img :src="categoria.imagen">
               <p class="text-center text-bold">{{categoria.nombre}}</p>
            </router-link>
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