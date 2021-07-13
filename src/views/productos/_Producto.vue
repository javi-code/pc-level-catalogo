<template>
  <div class="wrapp">
     <div class="section">
        <div class="grid-6-6">
           <div class="box-img-producto">
              <img :src="producto.imagen">
           </div>
           <div>
              <h1 class="color-one">{{producto.nombre}}</h1>
              <p>{{producto.descripcion}}</p>
              <p class="h1 text-bold">{{producto.precio}} Bs</p>
              <ul>
                 <li v-for="(car,index) in producto.caracteristicas" :key="index">
                    {{car}}
                 </li>
              </ul>
           </div>
        </div>
     </div>
  </div>
</template>

<script>
import { PRODUCTO } from '../../graphql/querys'
export default {
   apollo:{
      producto:{
         query:PRODUCTO,
         variables(){
            return{
               id: parseInt( this.$route.params.id )
            }
         }
      }
   }
}
</script>