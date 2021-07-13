<template>
   <div class="wrapp">
      <ProductosListar/>
   </div>
</template>

<script>
import ProductosListar from './ProductosListar.vue'
export default {
   name:'products',
   components: {
      ProductosListar
   }
}
</script>